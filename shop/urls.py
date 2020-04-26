from django.urls import path

from shop import views

app_name = 'shop'

urlpatterns = [
    path('products/<pk>/', views.ProductApiDetail.as_view()),
    path('products/category/<pk>/', views.ProductApiList.as_view()),
    path('categories/', views.CategoryApiList.as_view()),
]