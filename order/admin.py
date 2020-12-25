from django.contrib import admin
from django import forms

from .models import Order, OrderItem


class OrderItemForm(forms.ModelForm):

    class Meta:
        model = OrderItem
        fields = "__all__"

    def clean(self):
        result = super(OrderItemForm, self).clean()
        new_count = result.get('count')
        order_item = result.get('id')
        size = result.get('size')
        if new_count == order_item.count:
            return result

        difference = new_count - order_item.count
        if difference <= size.count:
            size.count = size.count - difference
            size.save()
            return result
        else:
            raise forms.ValidationError("Lack of the products in stock.")


class OrderItemAdmin(admin.StackedInline):
    form = OrderItemForm
    model = OrderItem
    extra = 0


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('user', 'first_name', 'last_name', 'phone', 'email', 'status')
    list_filter = ('status', )
    inlines = [OrderItemAdmin]
