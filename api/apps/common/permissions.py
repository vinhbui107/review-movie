from rest_framework import permissions


class CustomPermission(permissions.BasePermission):
    """
    Custom permission for request from user

    return
        Get: Allowany
        Post/Put/Delete: IsAuthenticated
    """

    def has_permission(self, request, view):
        if request.method == "GET":
            return True
        return request.user and request.user.is_authenticated


class SearchPermission(permissions.BasePermission):
    """
    Custom permission for search request from user

    return Allowany
    """

    def has_permission(self, request, view):
        if request.method:
            return True
