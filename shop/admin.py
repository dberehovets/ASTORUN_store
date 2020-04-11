from django.contrib import admin
from shop import models


admin.site.register(models.Category)


class ProductImagesInline(admin.StackedInline):
    model = models.ProductImage


@admin.register(models.Product)
class ProductAdmin(admin.ModelAdmin):

    search_fields = ['name']

    list_filter = ['category', 'product_extra', 'size', 'season']

    list_display = ['name', 'old_price', 'current_price', 'category', 'quantity', 'main_image']

    list_editable = ['quantity']

    inlines = [ProductImagesInline]



