from django.urls import path
from rest_framework import routers

from shop import views

app_name = 'shop'

urlpatterns = [
    path('categories/', views.CategoryApiList.as_view()),
    path('products/category/<category_id>/', views.ProductApiList.as_view()),
    path('products/<pk>/', views.ProductApiDetail.as_view())
]
