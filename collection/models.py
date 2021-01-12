from django.db import models


class Collection(models.Model):
    name = models.CharField(max_length=100, primary_key=True)
    image = models.ImageField(upload_to='images/collections/', blank=True, default=None)
    created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.name
