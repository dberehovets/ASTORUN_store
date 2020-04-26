# Generated by Django 3.0.5 on 2020-04-26 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_auto_20200426_1834'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='collection',
            field=models.PositiveSmallIntegerField(choices=[(0, 'Winter'), (1, 'Summer'), (2, 'Spring/Fall'), (3, 'Multi Season')], verbose_name='Колекція'),
        ),
        migrations.AlterField(
            model_name='product',
            name='extra',
            field=models.PositiveSmallIntegerField(blank=True, choices=[(0, 'Sale'), (1, 'New'), (2, 'Hot')], verbose_name='Мітка'),
        ),
        migrations.AlterField(
            model_name='product',
            name='gender',
            field=models.PositiveSmallIntegerField(blank=True, choices=[(0, 'Men'), (1, 'Women'), (2, 'Kids')], verbose_name='Стать'),
        ),
        migrations.AlterField(
            model_name='product',
            name='size',
            field=models.PositiveSmallIntegerField(blank=True, choices=[(0, 'Extra Small'), (1, 'Small'), (2, 'Medium'), (3, 'Large'), (4, 'Extra Large'), (5, 'Two Extra Large')], verbose_name='Розмір даної одиниці'),
        ),
    ]
