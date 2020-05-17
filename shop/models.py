from django.core.exceptions import ValidationError
from django.db import models
from shop.constants import *
from core.models import BaseModel
from accounts.models import User


class Category(BaseModel):
    name = models.CharField(max_length=100, unique=True)
    main_image = models.ImageField(upload_to='images/categories/', blank=True, default=None)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Categories"


class Product(BaseModel):

    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    main_image = models.ImageField(upload_to='images/products/main_images/', null=True, default=None)
    collection = models.PositiveSmallIntegerField(choices=COLLECTION_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    old_price = models.DecimalField(null=True, blank=True, max_digits=10,
                                    decimal_places=2)
    gender = models.PositiveSmallIntegerField(choices=GENDER_CHOICES, blank=True, null=True)
    label = models.PositiveSmallIntegerField(choices=LABELS, blank=True, null=True)

    @property
    def quantity(self):
        quantity = 0
        sizes = self.sizes.all()
        if sizes:
            for size in sizes:
                quantity += size.quantity
        return quantity

    @property
    def object_collection(self):
        return self.get_choice_object(self.collection, COLLECTION_CHOICES)

    @property
    def object_gender(self):
        return self.get_choice_object(self.gender, GENDER_CHOICES)

    @property
    def object_label(self):
        return self.get_choice_object(self.label, LABELS)

    def __str__(self):
        return self.name


class ProductImage(BaseModel):
    product = models.ForeignKey(Product, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/products/', null=True, default=None)

    def __str__(self):
        image_name = self.product.name
        return image_name

    class Meta:
        verbose_name = "Additional image"
        verbose_name_plural = "Additional images"


class ProductSize(BaseModel):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='sizes')
    name = models.PositiveSmallIntegerField(choices=SIZE_CHOICES)
    quantity = models.PositiveIntegerField(null=True)

    @property
    def object_name(self):
        return self.get_choice_object(self.name, SIZE_CHOICES)

    class Meta:
        verbose_name = "Size"
        verbose_name_plural = "Sizes"

    def __str__(self):
        return self.product.name


class Order(BaseModel):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    anonymous = models.TextField(max_length=4000, blank=True, null=True)
    sent = models.BooleanField(default=False)

    def __str__(self):
        return str(self.created.date()) + " " + str(self.created.time()).split(".")[0]


class OrderItem(BaseModel):
    item = models.ForeignKey(ProductSize, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    quantity = models.PositiveSmallIntegerField(default=1)

    def __str__(self):
        return str(self.quantity) + " of " + self.item.product.name
