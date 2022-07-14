from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    pass


class Car(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200, null=True, blank=True)
    brand = models.CharField(max_length=200, blank=True, default="Volkswagen")
    image = models.ImageField(null=True, blank=True)
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


class Review(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)

    user = models.ForeignKey(
        to=CustomUser,
        on_delete=models.SET_NULL,
        null=True,
    )
    car = models.ForeignKey(
        to=Car,
        on_delete=models.SET_NULL,
        null=True,
    )

    def __str__(self):
        return str(self.rating)


class Order(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    payment_method = models.CharField(max_length=200, null=True, blank=True)
    tax_price = models.DecimalField(max_digits=10, decimal_places=2)
    shipping_price = models.DecimalField(max_digits=10, decimal_places=2)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    is_paid = models.BooleanField(default=False)
    paid_at = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    is_delivered = models.BooleanField(default=False)
    delivered_at = models.DateTimeField(
        auto_now_add=False, null=True, blank=True
    )
    created_at = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey(
        to=CustomUser,
        on_delete=models.SET_NULL,
        null=True,
    )

    def __str__(self):
        return str(self.created_at)


class OrderItem(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    car = models.ForeignKey(
        to=Car,
        on_delete=models.SET_NULL,
        null=True,
    )
    # image =
    order = models.ForeignKey(
        to=Order,
        on_delete=models.SET_NULL,
        null=True,
    )

    def __str__(self):
        return self.name


class ShippingAddress(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postal_code = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shipping_price = models.DecimalField(max_digits=10, decimal_places=2)

    order = models.OneToOneField(
        to=Order,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.address
