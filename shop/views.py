from shop.models import Category, Product
from shop.serializers import CategorySerializer, ProductSerializer
from core.pagination import CustomPagination

from rest_framework.views import APIView
from rest_framework import generics, status
from rest_framework.response import Response


class CategoryApiList(generics.ListAPIView):
    queryset = Category.objects.all().order_by("-created")
    serializer_class = CategorySerializer


class ProductApiList(APIView, CustomPagination):

    def post(self, request, category_id, format=None):

        if 'filter' in request.data:
            filtr = request.data['filter']
            products = Product.objects.filter(category__id=category_id, **filtr).order_by("-created")
        else:
            products = Product.objects.filter(category__id=category_id).order_by("-created")

        result = self.get_page(request, products)

        if result:
            return Response(result, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)


class ProductApiDetail(generics.RetrieveAPIView):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer