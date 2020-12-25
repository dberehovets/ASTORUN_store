from django.db import models

from core.models import BaseModel
from collection.models import Collection
from .constants import SEASON_CHOICES, GENDER_CHOICES, SIZE_CHOICES, LABELS


class Product(BaseModel):
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE, related_name='products')
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    season = models.CharField(max_length=12, choices=SEASON_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    old_price = models.DecimalField(null=True, blank=True, max_digits=10,
                                    decimal_places=2)
    gender = models.CharField(max_length=12, choices=GENDER_CHOICES, blank=True, null=True)
    label = models.CharField(max_length=12, choices=LABELS, blank=True, null=True)
    in_stock = models.BooleanField(default=False)

    @property
    def season_obj(self):
        return self.get_choice_object(self.season, SEASON_CHOICES)

    @property
    def gender_obj(self):
        return self.get_choice_object(self.gender, GENDER_CHOICES)

    @property
    def label_obj(self):
        return self.get_choice_object(self.label, LABELS)

    def __str__(self):
        return self.name


class ProductImage(BaseModel):
    product = models.ForeignKey(Product, related_name='images', on_delete=models.CASCADE)
    url = models.ImageField(upload_to='images/products/', null=True, default=None)
    is_main = models.BooleanField(default=False)

    def __str__(self):
        image_name = self.product.name
        return image_name

    class Meta:
        verbose_name = "Image"
        verbose_name_plural = "Images"


class ProductSize(BaseModel):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='sizes')
    name = models.CharField(max_length=4, choices=SIZE_CHOICES)
    count = models.PositiveIntegerField(null=True)

    @property
    def name_obj(self):
        return self.get_choice_object(self.name, SIZE_CHOICES)

    class Meta:
        verbose_name = "Size"
        verbose_name_plural = "Sizes"

    def __str__(self):
        return self.product.name + ' ' + self.name

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
        result = super(ProductSize, self).save(force_insert=False, force_update=False, using=None,
                                               update_fields=None)
        product = self.product
        all_sizes = product.sizes.all()
        in_stock = False
        for size in all_sizes:
            if size.count > 0:
                in_stock = True
        product.in_stock = in_stock
        product.save()
        return result
