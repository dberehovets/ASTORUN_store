from django.db import models
from shop.constants import *
from core.models import BaseModel


class Category(BaseModel):
    name = models.CharField(max_length=100, unique=True, verbose_name='Назва')
    main_image = models.ImageField(upload_to='images/categories/', blank=True, verbose_name='Картинка', default="images/not-found.png")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Категорія"
        verbose_name_plural = "Категорії"


class Product(BaseModel):

    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products', verbose_name='Категорія')
    name = models.CharField(max_length=100, verbose_name='Назва', unique=True)
    description = models.TextField(blank=True, verbose_name='Описання')
    main_image = models.ImageField(upload_to='images/products/main_images/', verbose_name='Основна картинка',
                                   default="images/not-found.png")
    quantity = models.PositiveIntegerField(null=True, default=5, verbose_name='Кількість')
    collection = models.PositiveSmallIntegerField(choices=COLLECTION_CHOICES, verbose_name='Колекція')
    price = models.DecimalField(verbose_name='Поточна ціна', max_digits=10, decimal_places=2)
    old_price = models.DecimalField(null=True, blank=True, verbose_name='Стара ціна (до знижки)', max_digits=10,
                                    decimal_places=2)
    gender = models.PositiveSmallIntegerField(choices=GENDER_CHOICES, blank=True, null=True, verbose_name='Стать')
    size = models.PositiveSmallIntegerField(choices=SIZE_CHOICES, blank=True, null=True,
                                            verbose_name='Розмір даної одиниці')
    extra = models.PositiveSmallIntegerField(choices=EXTRA_CHOICES, blank=True, null=True, verbose_name='Мітка')

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
    def object_extra(self):
        return self.get_choice_object(self.extra, EXTRA_CHOICES)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Продукт"
        verbose_name_plural = "Продукти"


class ProductImage(models.Model):
    product = models.ForeignKey(Product, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/products/', default='No Image')

    def __str__(self):
        image_name = self.product.name
        return image_name

    class Meta:
        verbose_name = "Додаткова картинка"
        verbose_name_plural = "Додаткові картинки"
