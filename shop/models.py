from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name='Назва')
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
    COLLECTION_CHOICES = (
        ('w', 'Winter'),
        ('s', 'Summer'),
        ('s/f', 'Spring/Fall'),
        ('mlt', 'Multi')
    )
    EXTRA_CHOICES = (
        ('sale', 'Sale'),
        ('new', 'New'),
        ('hot', 'Hot'),
    )
    GENDER_CHOICES = (
        ('men', 'Men'),
        ('women', 'Women'),
        ('kids', "Kids"),
    )

    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products', verbose_name='Категорія')
    name = models.CharField(max_length=100, verbose_name='Назва', unique=True)
    description = models.TextField(blank=True, verbose_name='Описання')
    main_image = models.ImageField(upload_to='images/products/main_images/', verbose_name='Основна картинка', default="images/not-found.png")
    quantity = models.PositiveIntegerField(null=True, default=5, verbose_name='Кількість')
    collection = models.CharField(choices=COLLECTION_CHOICES, max_length=3, verbose_name='Колекція')
    price = models.DecimalField(verbose_name='Поточна ціна', max_digits=10, decimal_places=2)
    old_price = models.DecimalField(null=True, blank=True, verbose_name='Стара ціна (до знижки)', max_digits=10, decimal_places=2)
    gender = models.CharField(max_length=5, choices=GENDER_CHOICES, blank=True, verbose_name='Стать')
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
