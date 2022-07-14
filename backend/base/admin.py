from django.contrib import admin
from base.models import *


admin.site.register(CustomUser)
admin.site.register(Car)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
