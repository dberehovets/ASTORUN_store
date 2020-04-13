from shop.models import Category, Product
from shop.serializers import CategorySerializer, ProductSerializer
from shop.pagination import ProductPagination

from rest_framework.views import APIView
from rest_framework import generics, status
from rest_framework.response import Response


class CategoryApiList(generics.ListAPIView):
    """
    API endpoint that allows categories to be viewed.
    """
    queryset = Category.objects.all().order_by("-id")
    serializer_class = CategorySerializer


class ProductApiList(APIView, ProductPagination):
    """
    API endpoint that allows to view products of a particular category by its id.
    """

    def post(self, request, category_id, format=None):
        category = generics.get_object_or_404(Category, pk=category_id)

        if 'filter' in request.data:
            filter = request.data['filter']
            if 'ids' in filter:
                ids = filter.pop('ids')
                products = Product.objects.filter(category=category, id__in=ids, **filter).order_by("-id")
            else:
                products = Product.objects.filter(category=category, **filter).order_by("-id")
        else:
            products = Product.objects.filter(category=category).order_by("-id")

        result = self.get_page(request, products)

        if result:
            return Response(result, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)


class ProductApiDetail(generics.RetrieveAPIView):
    """
    API endpoint that allows to view a product by its id.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer