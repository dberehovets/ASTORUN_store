from django_filters import rest_framework as filter
from rest_framework.filters import OrderingFilter
from rest_framework import permissions, viewsets, mixins

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
