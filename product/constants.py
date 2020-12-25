XS_SIZE = 'XS'
S_SIZE = 'S'
M_SIZE = 'M'
L_SIZE = 'L'
XL_SIZE = 'XL'
XXL_SIZE = 'XXL'

SIZE_CHOICES = (
    (XS_SIZE, 'Extra Small'),
    (S_SIZE, 'Small'),
    (M_SIZE, 'Medium'),
    (L_SIZE, 'Large'),
    (XL_SIZE, 'Extra Large'),
    (XXL_SIZE, 'Two Extra Large')
)

WINTER_SEASON = 'w'
SUMMER_SEASON = 's'
SPRING_FALL_SEASON = 'sf'
MULTI_SEASON_SEASON = 'ms'

SEASON_CHOICES = (
    (WINTER_SEASON, 'Winter'),
    (SUMMER_SEASON, 'Summer'),
    (SPRING_FALL_SEASON, 'Spring/Fall'),
    (MULTI_SEASON_SEASON, 'Multi Season')
)

LABEL_SALE = 'sale'
LABEL_NEW = 'new'
LABEL_HOT = 'hot'

LABELS = (
    (LABEL_SALE, 'Sale'),
    (LABEL_NEW, 'New'),
    (LABEL_HOT, 'Hot'),
)

GENDER_MEN = 'm'
GENDER_WOMEN = 'w'
GENDER_KIDS = 'k'

GENDER_CHOICES = (
    (GENDER_MEN, 'Men'),
    (GENDER_WOMEN, 'Women'),
    (GENDER_KIDS, "Kids"),
)
