from shop.models import Category, Product, ProductImage, ProductSize
from shop.serializers import CategorySerializer, ProductSerializer, ProductImageSerializer, ProductSizeSerializer
from core.pagination import CustomPagination
from shop.filters import ProductFilter, ProductImageFilter, ProductSizeFilter

from rest_framework import mixins, viewsets
from django_filters import rest_framework as filter


class CategoryViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Category.objects.all().order_by("-created")
    serializer_class = CategorySerializer


class ProductViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all().order_by("-created")
    pagination_class = CustomPagination
    filter_backends = (filter.DjangoFilterBackend, )
    filterset_class = ProductFilter


class ProductImageViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = ProductImageSerializer
    queryset = ProductImage.objects.all()
    pagination_class = CustomPagination
    filter_backends = (filter.DjangoFilterBackend, )
    filterset_class = ProductImageFilter


class ProductSizeViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = ProductSizeSerializer
    queryset = ProductSize.objects.all()
    filter_backends = (filter.DjangoFilterBackend, )
    filterset_class = ProductSizeFilter

    def get_queryset(self):
        return super(ProductSizeViewSet, self).get_queryset().filter(quantity__gt=0)
