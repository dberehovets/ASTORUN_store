XS_SIZE = 0
S_SIZE = 1
M_SIZE = 2
L_SIZE = 3
XL_SIZE = 4
XXL_SIZE = 5

SIZE_CHOICES = (
    (XS_SIZE, 'Extra Small'),
    (S_SIZE, 'Small'),
    (M_SIZE, 'Medium'),
    (L_SIZE, 'Large'),
    (XL_SIZE, 'Extra Large'),
    (XXL_SIZE, 'Two Extra Large')
)

WINTER_COLLECTION = 0
SUMMER_COLLECTION = 1
SPRING_FALL_COLLECTION = 2
MULTI_SEASON_COLLECTION = 3

COLLECTION_CHOICES = (
    (WINTER_COLLECTION, 'Winter'),
    (SUMMER_COLLECTION, 'Summer'),
    (SPRING_FALL_COLLECTION, 'Spring/Fall'),
    (MULTI_SEASON_COLLECTION, 'Multi Season')
)

EXTRA_SALE = 0
EXTRA_NEW = 1
EXTRA_HOT = 2

EXTRA_CHOICES = (
    (EXTRA_SALE, 'Sale'),
    (EXTRA_NEW, 'New'),
    (EXTRA_HOT, 'Hot'),
)

GENDER_MEN = 0
GENDER_WOMEN = 1
GENDER_KIDS = 2

GENDER_CHOICES = (
    (GENDER_MEN, 'Men'),
    (GENDER_WOMEN, 'Women'),
    (GENDER_KIDS, "Kids"),
)