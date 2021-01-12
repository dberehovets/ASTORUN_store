from django_filters import rest_framework as filter
from rest_framework.filters import OrderingFilter
from rest_framework import permissions, viewsets, mixins
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Product
from .serializers import ProductListSerializer, ProductRetrieveSerializer
from .filters import ProductFilter
from core.pagination import CustomPagination


class ProductView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Product.objects.all().order_by('-in_stock')
    permission_classes = [permissions.AllowAny]
    filter_backends = (OrderingFilter, filter.DjangoFilterBackend)
    filterset_class = ProductFilter
    pagination_class = CustomPagination

    def get_serializer_class(self):
        if self.action == 'list':
            return ProductListSerializer
        return ProductRetrieveSerializer

    @action(methods=['POST'], url_path='by-ids', detail=False)
    def by_ids(self, request):
        ids = request.data.get('ids')
        products = Product.objects.filter(id__in=ids)
        page = self.paginate_queryset(products)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(products, many=True)
        return Response(serializer.data)
