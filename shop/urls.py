from django.urls import path

from shop import views

app_name = 'shop'

urlpatterns = [
    path('products/<int:id>/', views.ProductApiDetail.as_view()),
    path('products/category/<int:category_id>/', views.ProductApiList.as_view()),
    path('categories/', views.CategoryApiList.as_view()),
]