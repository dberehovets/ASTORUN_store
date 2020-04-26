from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    profile_image = models.ImageField(upload_to='media/images/accounts/profile_images', blank=True,
                                      verbose_name='Фото')

