from rest_framework import serializers
from base.models import CustomUser, Car

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = "__all__"
