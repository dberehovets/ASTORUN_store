from django.urls import path
from rest_framework import routers

from shop import viewsets

router = routers.SimpleRouter()

router.register('categories', viewsets.CategoryViewSet)
router.register('products', viewsets.ProductViewSet)
router.register('images', viewsets.ProductImageViewSet)
router.register('sizes', viewsets.ProductSizeViewSet)
router.register('orders', viewsets.OrderViewSet)

urlpatterns = [
    path("order_items/", viewsets.OrderItemView.as_view())
] + router.urls
