from shop.models import Category, Product
from shop.serializers import CategorySerializer, ProductSerializer

from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response


class CategoryApiList(generics.ListAPIView):
    """
    API endpoint that allows categories to be viewed.
    """
    queryset = Category.objects.all().order_by("-id")
    serializer_class = CategorySerializer


class ProductApiList(APIView):

    def get(self, request, category_pk, format=None):
        category = generics.get_object_or_404(Category, pk=category_pk)
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductApiDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer