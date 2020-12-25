from django_filters import rest_framework as filters

from .models import Product


class ProductFilter(filters.FilterSet):

    class Meta:
        model = Product
        fields = {'collection': ['exact'],
                  'season': ['exact', 'iexact'],
                  'gender': ['exact', 'iexact'],
                  'label': ['exact', 'iexact']
                  }
