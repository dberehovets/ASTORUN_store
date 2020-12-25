from django.db import models

from core.models import BaseModel


class Collection(BaseModel):
    name = models.CharField(max_length=100, unique=True)
    image = models.ImageField(upload_to='images/collections/', blank=True, default=None)

    def __str__(self):
        return self.name
