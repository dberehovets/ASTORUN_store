# Generated by Django 3.1.4 on 2021-01-12 08:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0005_product_in_stock'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='collection',
        ),
    ]
