from django.urls import include, path
from rest_framework import routers

from base import views

router = routers.DefaultRouter()
router.register(r"cars", views.CarViewSet, basename="car")
router.register(r"users", views.UserViewSet, basename="user")

urlpatterns = [
    path("", include(router.urls)),
    path(
        "users/profile/", views.UserProfileView.as_view(), name="user_profile"
    ),
    path(
        "users/login/",
        views.CustomTokenObtainPairView.as_view(),
        name="token_obtain_pair",
    ),
    # path("users/register/", views.RegisterView.as_view(), name="register"),
]
