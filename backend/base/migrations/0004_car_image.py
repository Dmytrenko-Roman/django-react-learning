# Generated by Django 4.0.6 on 2022-07-14 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0003_order_shippingaddress_review_orderitem"),
    ]

    operations = [
        migrations.AddField(
            model_name="car",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to=""),
        ),
    ]
