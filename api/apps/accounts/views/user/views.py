from django.db import DatabaseError, transaction
from django.shortcuts import render

from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.exceptions import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.accounts.models import User
from apps.accounts.serializers import (
    GetUserProfileSerializer,
    MyTokenObtainPairSerializer,
    RegisterSerializer,
    UpdateUserProfileRequestSerializer,
    UserRatingsSerializer,
)
from apps.accounts.views.user.serializers import (
    AuthenticatedUserProfileSerializer,
    GetUserSerializer,
    UserUserProfileSerializer,
)
from apps.common.model_loaders import (
    get_movie_model,
    get_rating_model,
    get_user_model,
)
from apps.common.permissions import CustomPermission
from apps.common.responses import ApiMessageResponse


class UserInfo(APIView):
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

    def _get_user_serializer_class_for_user_and_username(self, user, username):
        if user.username == username:
            return AuthenticatedUserProfileSerializer
        else:
            return UserUserProfileSerializer


class CurrentUser(APIView):

    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = request.user

        user_profile_serializer = GetUserProfileSerializer(
            user, context={"request": request}
        )
        return Response(
            user_profile_serializer.data, status=status.HTTP_200_OK
        )


class UserRatings(APIView):

    permission_classes = (AllowAny,)

    def get(self, request, username):
        Rating = get_rating_model()
        User = get_user_model()
        user = User.objects.get(username=username)

        if user:
            ratings = Rating.objects.filter(user_id=user)
            ratings_serializer = UserRatingsSerializer(
                ratings, context={"request": request}, many=True
            )
            return Response(ratings_serializer.data, status=status.HTTP_200_OK)
        else:
            return ApiMessageResponse(
                "User not found", status=status.HTTP_404_NOT_FOUND
            )


class UserComments(APIView):
    def __init__(self, *args):
        return


class DeleteUser(APIView):
    permission_classes = (IsAuthenticated,)

    def __init__(self, *args):
        return


class ChangePassword(APIView):
    permission_classes = (IsAuthenticated,)

    def __init__(self, *args):
        return
