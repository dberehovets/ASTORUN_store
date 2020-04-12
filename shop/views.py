from shop.models import Category, Product
from shop.serializers import CategorySerializer, ProductSerializer
from shop.pagination import PaginationHandlerMixin

from rest_framework.views import APIView
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination


class BasicPagination(PageNumberPagination):
    page_size_query_param = 10


class CategoryApiList(generics.ListAPIView):
    """
    API endpoint that allows categories to be viewed.
    """
    queryset = Category.objects.all().order_by("-id")
    serializer_class = CategorySerializer


class ProductApiList(APIView, PaginationHandlerMixin):
    """
    API endpoint that allows to view products of a particular category by its id.
    """
    pagination_class = BasicPagination
    def get(self, request, category_pk, format=None):
        category = generics.get_object_or_404(Category, pk=category_pk)
        products = Product.objects.filter(category=category)
        page = self.paginate_queryset(products)
        if page:
            serializer = self.get_paginated_response(ProductSerializer(page, many=True).data)
        else:
            serializer = ProductSerializer(products, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class ProductApiDetail(generics.RetrieveAPIView):
    """
    API endpoint that allows to view a product by its id.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer