from django.urls import path

from shop import views

app_name = 'shop'

urlpatterns = [
    path('products/<int:pk>/', views.ProductApiDetail.as_view(), name='product_by_pk'),
    path('products/category/<int:category_pk>/', views.ProductApiList.as_view(), name='product_by_category_pk'),
    path('categories/', views.CategoryApiList.as_view(), name='categories'),
]