from rest_framework import permissions


class CreateOnly(permissions.BasePermission):
    methods = "POST"

    def has_permission(self, request, view):
        if request.method in self.methods:
            return True
        return False
