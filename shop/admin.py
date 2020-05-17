from django.contrib import admin
from django import forms
from django.core.exceptions import ValidationError
from shop import models


admin.site.register(models.Category)


class ProductImagesInline(admin.StackedInline):
    model = models.ProductImage


class ProductSizesInlineForm(forms.ModelForm):

    class Meta:
        model = models.ProductSize
        fields = ('name', 'quantity')

    def clean(self):
        product = self.cleaned_data.get('product')
        sizes = models.ProductSize.objects.filter(product=product)
        name = self.cleaned_data.get('name')
        id = self.cleaned_data.get('id', None)

        for size in sizes:
            if size.name == name and not id:
                raise ValidationError("The size already exists. Check size names for this product.")
        return super().clean()


class ProductSizesInline(admin.StackedInline):
    model = models.ProductSize
    form = ProductSizesInlineForm


@admin.register(models.Product)
class ProductAdmin(admin.ModelAdmin):

    search_fields = ['name']

    list_filter = ['category', 'label', 'collection', 'gender']

    list_display = ['name', 'old_price', 'price', 'category', 'main_image', 'quantity']

    inlines = [ProductImagesInline, ProductSizesInline]


class OrderItemInline(admin.StackedInline):
    model = models.OrderItem


@admin.register(models.Order)
class OrderAdmin(admin.ModelAdmin):

    list_filter = ['sent']

    list_display = ['__str__', 'sent']

    list_editable = ['sent']

    inlines = [OrderItemInline]