from rest_framework.response import Response
from shop.models import Category, Product, ProductImage, ProductSize, OrderItem, Order
from shop.serializers import (CategorySerializer, ProductSerializer, ProductImageSerializer, ProductSizeSerializer,
                              OrderItemSerializer, OrderSerializer)
from core.pagination import CustomPagination
from shop.filters import ProductFilter, ProductImageFilter, ProductSizeFilter

from rest_framework import mixins, viewsets, status
from rest_framework.views import APIView
from django_filters import rest_framework as filter
from rest_framework.decorators import action


class CategoryViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Category.objects.all().order_by("-created")
    serializer_class = CategorySerializer


class ProductViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    pagination_class = CustomPagination
    filter_backends = (filter.DjangoFilterBackend, )
    filterset_class = ProductFilter

    def get_queryset(self):
        return Product.objects.all().exclude(sizes=None).order_by("-created")

    @action(methods=['POST'], detail=False)
    def by_ids(self, request):
        ids = request.data.get('ids', None)
        if not ids:
            return Response("Ids were not provided!", status=status.HTTP_400_BAD_REQUEST)

        products = Product.objects.filter(id__in=ids)

        if not products:
            return Response("Sizes were not found.")

        result = ProductSerializer(products, many=True).data

        return Response(result, status=status.HTTP_200_OK)


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

    @action(methods=['POST'], detail=False)
    def by_ids(self, request):
        ids = request.data.get('ids', None)
        if not ids:
            return Response("Ids were not provided!", status=status.HTTP_400_BAD_REQUEST)

        sizes = ProductSize.objects.filter(id__in=ids)

        if not sizes:
            return Response("Sizes were not found.")

        result = ProductSizeSerializer(sizes, many=True).data

        return Response(result, status=status.HTTP_200_OK)


class OrderViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin, mixins.RetrieveModelMixin):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()


class OrderItemView(APIView):

    def post(self, request, format=None):
        items = request.data

        if items:
            for item in items:
                serializer = OrderItemSerializer(data=item)
                if serializer.is_valid():
                    serializer.save()
                else:
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response("Items were not provided.", status=status.HTTP_400_BAD_REQUEST)

        return Response(items, status=status.HTTP_201_CREATED)