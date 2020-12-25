from django.contrib import admin

from .models import Product, ProductImage, ProductSize


class ProductImageAdmin(admin.StackedInline):
    model = ProductImage
    extra = 0


class ProductSizeAdmin(admin.StackedInline):
    model = ProductSize
    extra = 0


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'collection', 'price', 'old_price', 'gender', 'label')
    list_filter = ('collection', 'gender', 'label')
    list_editable = ('price', 'old_price')
    inlines = [ProductImageAdmin, ProductSizeAdmin]

