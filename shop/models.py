from django.db import models
from django.template.defaultfilters import slugify


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name='Назва')
    description = models.TextField(blank=True, verbose_name='Описання')
    main_image = models.ImageField(upload_to='images/categories/', blank=True, verbose_name='Картинка', default="images/not-found.png")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Категорія"
        verbose_name_plural = "Категорії"


class Product(models.Model):
    SIZE_CHOICES = (
        ('xs', 'Extra Small'),
        ('s', 'Small'),
        ('m', 'Medium'),
        ('l', 'Large'),
        ('xl', 'Extra Large'),
        ('xxl', 'Two Extra Large')
    )
    SEASON_CHOICES = (
        ('w', 'Зима'),
        ('s', 'Літо'),
        ('s/f', 'Весна/Осінь'),
        ('mlt', 'Мульти')
    )
    EXTRA_CHOICES = [
        ('sale', 'Sale'),
        ('new', 'New'),
        ('hot', 'Hot'),
    ]

    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products', verbose_name='Категорія')
    name = models.CharField(max_length=100, verbose_name='Назва', unique=True)
    description = models.TextField(blank=True, verbose_name='Описання')
    main_image = models.ImageField(upload_to='images/products/main_images/', verbose_name='Основна картинка', default="images/not-found.png")
    quantity = models.PositiveIntegerField(null=True, default=5, verbose_name='Кількість')
    season = models.CharField(choices=SEASON_CHOICES, max_length=3, verbose_name='Сезон')
    current_price = models.DecimalField(verbose_name='Поточна ціна', max_digits=10, decimal_places=2)
    old_price = models.DecimalField(null=True, blank=True, verbose_name='Стара ціна (до знижки)', max_digits=10, decimal_places=2)
    size = models.CharField(choices=SIZE_CHOICES, max_length=3, blank=True, verbose_name='Розмір даної одиниці')
    product_extra = models.CharField(max_length=5, choices=EXTRA_CHOICES, blank=True, verbose_name='Мітка')

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
