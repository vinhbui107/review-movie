from django.db import transaction
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.accounts.views_new.user.serializers import (
    GetUserSerializer,
    UserUserProfileSerializer,
    AuthenticatedUserProfileSerializer,
    # DeleteAuthenticatedUserSerializer,
)
from apps.common.permissions import CustomPermission
from apps.accounts.models import User


class UserProfile(APIView):
    permission_classes = (CustomPermission,)

    def get(self, request, username):
        request_data = request.data.copy()
        request_data["username"] = username

        serializer = GetUserSerializer(data=request_data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        username = data.get("username")

        user = request.user

        serializer = self._get_user_serializer_class_for_user_and_username(
            user=user, username=username
        )

        if user.username == username:
            target_user = user
        else:
            target_user = User.get_user_with_username(username=username)

        user_serializer = serializer(target_user, context={"request": request})

        return Response(user_serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, *args, **kwargs):
        return super().patch(request, *args, **kwargs)

    def _get_user_serializer_class_for_user_and_username(self, user, username):
        if user.username == username:
            return AuthenticatedUserProfileSerializer
        else:
            return UserUserProfileSerializer


# class DeleteAuthenticatedUser(APIView):
#     permission_classes = (IsAuthenticated,)

#     def post(self, request):
#         serializer = DeleteAuthenticatedUserSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         data = serializer.validated_data

#         user = request.user

#         password = data.get("password")

#         with transaction.atomic():
#             user.delete_with_password(password=password)

#         return Response(_("Goodbye 😔"), status=status.HTTP_200_OK)


class ChangePassword(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        return
