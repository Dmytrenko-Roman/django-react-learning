from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    pass


class Car(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200, null=True, blank=True)
    brand = models.CharField(max_length=200, blank=True, default="Volkswagen")
    # image =
    description = models.TextField(null=True, blank=True)
    body_type = models.CharField(max_length=200, null=True, blank=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True
    )
    num_reviews = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    count_in_stock = models.IntegerField(null=True, blank=True, default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey(
        to=CustomUser,
        on_delete=models.SET_NULL,
        null=True,
    )

    def __str__(self):
        return self.name
