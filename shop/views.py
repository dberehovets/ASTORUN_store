from django.conf import settings
from shop.models import Category, Product
from shop.serializers import CategorySerializer, ProductSerializer
from shop.pagination import ProductPagination

from rest_framework.views import APIView
from rest_framework import generics, status
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage


class CategoryApiList(generics.ListAPIView):
    """
    API endpoint that allows categories to be viewed.
    """
    queryset = Category.objects.all().order_by("-id")
    serializer_class = CategorySerializer


class ProductApiList(APIView):
    """
    API endpoint that allows to view products of a particular category by its id.
    """
    def get_result(self, request, products):
        page_number = request.data.get('page_number', 1)
        page_size = request.data.get('page_size', 10)

        paginator = Paginator(products, 10)
        try:
            page = ProductSerializer(paginator.page(page_number), many=True).data
        except EmptyPage:
            return None

        result = {
            "page": page_number,
            "pages": paginator.num_pages,
            "page_size": page_size,
            "total_items": products.count(),
            "results": page
        }
        return result

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

        result = self.get_result(request, products)
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