from django.urls import path, include
from rest_framework import routers
from base import views

router = routers.DefaultRouter()
router.register(r'cars', views.CarViewSet, basename='car')

urlpatterns = [
    path('', include(router.urls)),
    path('api/', include('rest_framework.urls', namespace='rest_framework'))
]
