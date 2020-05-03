from django.db import models
from shop.constants import *
from core.models import BaseModel


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
    quantity = models.PositiveIntegerField(null=True, default=5)
    collection = models.PositiveSmallIntegerField(choices=COLLECTION_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    old_price = models.DecimalField(null=True, blank=True, max_digits=10,
                                    decimal_places=2)
    gender = models.PositiveSmallIntegerField(choices=GENDER_CHOICES, blank=True, null=True)
    size = models.PositiveSmallIntegerField(choices=SIZE_CHOICES, blank=True, null=True)
    label = models.PositiveSmallIntegerField(choices=LABELS, blank=True, null=True)

    @property
    def object_collection(self):
        return self.get_choice_object(self.collection, COLLECTION_CHOICES)

    @property
    def object_gender(self):
        return self.get_choice_object(self.gender, GENDER_CHOICES)

    @property
    def object_size(self):
        return self.get_choice_object(self.size, SIZE_CHOICES)

    @property
    def object_label(self):
        return self.get_choice_object(self.label, LABELS)

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    product = models.ForeignKey(Product, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/products/', null=True, default=None)

    def __str__(self):
        image_name = self.product.name
        return image_name

    class Meta:
        verbose_name = "Additional image"
        verbose_name_plural = "Additional images"
