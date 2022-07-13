from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.response import Response
from base.products import products


class ProductViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    
    def list(self, request):
        return Response(products)
