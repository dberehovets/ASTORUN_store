from django_filters import rest_framework as filters

from .models import Product, ProductImage, ProductSize


class NumberInFilter(filters.BaseInFilter, filters.NumberFilter):
    pass


class UUIDInFilter(filters.BaseInFilter, filters.UUIDFilter):
    pass


class ProductFilter(filters.FilterSet):
    collection = NumberInFilter(field_name='collection')
    gender = NumberInFilter(field_name='gender')
    label = NumberInFilter(field_name='label')
    category = UUIDInFilter(field_name='category')

    class Meta:
        model = Product
        fields = ('category', 'collection', 'name', 'gender', 'label')


class ProductImageFilter(filters.FilterSet):
    class Meta:
        model = ProductImage
        fields = ('product', )


class ProductSizeFilter(filters.FilterSet):
    class Meta:
        model = ProductSize
        fields = ('product', )