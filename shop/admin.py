from django.contrib import admin
from shop import models


admin.site.register(models.Category)


class ProductImagesInline(admin.StackedInline):
    model = models.ProductImage


@admin.register(models.Product)
class ProductAdmin(admin.ModelAdmin):

    search_fields = ['name']

    list_filter = ['category', 'extra', 'size', 'collection', 'gender']

    list_display = ['name', 'old_price', 'price', 'category', 'quantity', 'main_image']

    list_editable = ['quantity']

    inlines = [ProductImagesInline]



