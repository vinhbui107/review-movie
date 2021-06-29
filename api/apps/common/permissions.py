from rest_framework.permissions import BasePermission, IsAuthenticated


class CustomPermission(BasePermission):
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


class IsOwner(IsAuthenticated):
    """
    Permission that checks if this object has a foreign key pointing to the
    authenticated user of this request
    """

    def has_object_permission(self, request, view, obj):
        return obj.user == request.user
