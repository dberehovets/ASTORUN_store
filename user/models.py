from django.contrib.auth.models import (AbstractBaseUser, UserManager,
                                        PermissionsMixin)
from django.db import models

from core.models import BaseModel
from .constants import *


class User(AbstractBaseUser, PermissionsMixin, BaseModel):
    email = models.EmailField(null=False, unique=True)
    name = models.CharField(max_length=64)
    phone = models.CharField(max_length=32, blank=True, null=True)
    address = models.CharField(max_length=64, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    gender = models.PositiveSmallIntegerField(choices=GENDER_CHOICES, blank=True, null=True)
    subscriber = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(
        default=False,
        help_text='Designates whether the user can log into this admin site.',
    )

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    objects = UserManager()
    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    @property
    def object_gender(self):
        return self.get_choice_object(self.gender, GENDER_CHOICES)
