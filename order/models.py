from django.db import models
from core.models import BaseModel
from user.models import User
from product.models import ProductSize
from .constants import STATUS_NEW, ORDER_STATUSES


class Order(BaseModel):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='orders')
    first_name = models.CharField(max_length=128, null=True)
    last_name = models.CharField(max_length=128, null=True)
    phone = models.CharField(max_length=32)
    email = models.EmailField()
    del_address = models.CharField(max_length=255)
    del_city = models.CharField(max_length=128)
    status = models.CharField(max_length=12, choices=ORDER_STATUSES, default=STATUS_NEW)

    def __str__(self):
        return self.phone

    @property
    def status_obj(self):
        return self.get_choice_object(self.status, ORDER_STATUSES)


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    size = models.ForeignKey(ProductSize, on_delete=models.SET_NULL, null=True, related_name='order_items', verbose_name='product')
    count = models.PositiveIntegerField()
