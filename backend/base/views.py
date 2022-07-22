from django.contrib.auth.hashers import make_password
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView

from base.models import Car, CustomUser
from base.permissions import AllowCreate
from base.serializers import (CarSerializer,  # RegisterSerializer,
                              CustomTokenObtainPairSerializer, UserSerializer,
                              UserSerializerWithToken)


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


# class RegisterView(generics.CreateAPIView):
#     queryset = CustomUser.objects.all()
#     serializer_class = RegisterSerializer
#     permission_classes = (AllowAny,)


class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAdminUser | AllowCreate,)
    http_method_names = ("get", "post")

    def create(self, request, *args, **kwargs):
        data = request.data

        user = CustomUser.objects.create(
            first_name=data["name"],
            username=data["email"],
            email=data["email"],
            password=make_password(data["password"]),
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)


class UserProfileView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)
