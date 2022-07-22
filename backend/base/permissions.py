from rest_framework import permissions


class AllowCreate(permissions.BasePermission):
    methods = ("POST")

    def has_permission(self, request, view):
        return request.method in self.methods
