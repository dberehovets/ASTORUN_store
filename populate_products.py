import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ASTORUN_store.settings')

import django
django.setup()

## FAKER
import random
from shop.models import Category, Product
from faker import Faker

fakegen = Faker()
categories = ['Головні убори', 'Світшоти', 'Штани']
season = [0, 1, 2, 3]


def add_category():
    category = Category.objects.get_or_create(name=random.choice(categories))[0]
    category.save()
    return category


def populate(N=15):
    for entry in range(N):
        category = add_category()

        fake_name = fakegen.bothify(text='Product: ?????? - ###')
        fake_description = fakegen.text()
        fake_season = random.choice(season)
        fake_price = fakegen.pydecimal(min_value=20, max_value=1000)

        Product.objects.get_or_create(
            category=category,
            name=fake_name,
            description=fake_description,
            collection=fake_season,
            price=fake_price
        )


if __name__ == '__main__':
    print("Populating!")
    populate(30)
    print("Population complete!")