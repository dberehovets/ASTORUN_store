from django_filters import rest_framework as filter
from rest_framework.filters import OrderingFilter
from rest_framework import permissions, viewsets, mixins
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from rest_framework.exceptions import ValidationError

from .models import Order
from .serializers import OrderListSerializer, OrderRetrieveSerializer, OrderItemCreateSerializer
from .filters import OrderFilter
from core.pagination import CustomPagination


class OrderView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.CreateModelMixin):
    queryset = Order.objects.all()
    permission_classes = [permissions.AllowAny]
    filter_backends = (OrderingFilter, filter.DjangoFilterBackend)
    filterset_class = OrderFilter
    pagination_class = CustomPagination

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    def get_serializer_class(self):
        if self.action in ['list', 'create']:
            return OrderListSerializer
        return OrderRetrieveSerializer

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user).order_by('-created')

    def create(self, request, *args, **kwargs):
        items = request.data.get('items')
        if not items:
            return Response({"message": {"detail": "provide items"}}, status=HTTP_400_BAD_REQUEST)
        result = super(OrderView, self).create(request, *args, **kwargs)
        order = Order.objects.get(id=result.data.get('id'))
        validated = []
        for item in items:
            item['order'] = order.id
            ser = OrderItemCreateSerializer(data=item)
            if not ser.is_valid():
                order.delete()
                raise ValidationError(ser.errors)
            validated.append(ser)
        for val in validated:
            val.save()

        ser = OrderRetrieveSerializer(order).data
        return Response(ser)
