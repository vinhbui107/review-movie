from django.db import DatabaseError, transaction
from django.shortcuts import render
from django.core.paginator import Paginator
from rest_framework import status
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from rest_framework.authtoken.models import Token
from rest_framework.exceptions import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.accounts.views.user.serializers import (
    GetUserDataSerializer,
    UserInfoSerializer,
    UserRatingsSerializer,
    UserCommentsSerializer,
    AuthenticatedUserInfoSerializer,
)
from apps.common.model_loaders import (
    get_movie_model,
    get_rating_model,
    get_user_model,
)
from apps.common.permissions import CustomPermission
from apps.accounts.models import User
from apps.common.helpers import validate_data


class GetUserInfo(APIView):
    def get(self, request, username):
        request_data = request.data.copy()
        request_data["username"] = username

        data = validate_data(GetUserDataSerializer, request_data)
        username = data.get("username")

        user = request.user

        if user.username == username:
            target_user = user
        else:
            target_user = User.get_user_with_username(username=username)

        user_serializer = UserInfoSerializer(
            target_user, context={"request": request}
        )

        return Response(user_serializer.data, status=status.HTTP_200_OK)


class UserRatings(APIView):
    def get(self, request, username):
        request_data = request.data.copy()
        request_data["username"] = username

        data = validate_data(GetUserDataSerializer, request_data)
        username = data.get("username")

        ratings = User.list_rating(username=username)

        ratings_serializer = UserRatingsSerializer(
            ratings, many=True, context={"request": request}
        )

        return Response(ratings_serializer.data, status=status.HTTP_200_OK)


class UserComments(APIView):
    def get(self, request, username):
        request_data = request.data.copy()
        request_data["username"] = username

        data = validate_data(GetUserDataSerializer, request_data)
        username = data.get("username")

        comments = User.list_comment(username=username)

        comments_serializer = UserCommentsSerializer(
            comments, many=True, context={"request": request}
        )

        return Response(comments_serializer.data, status=status.HTTP_200_OK)


class AuthenticatedUser(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user_serializer = AuthenticatedUserInfoSerializer(
            request.user, context={"request": request}
        )
        return Response(user_serializer.data, status=status.HTTP_200_OK)

    # def patch(self, request):
    # serializer = UpdateAuthenticatedUserSerializer(data=request.data)
    # serializer.is_valid(raise_exception=True)
    # data = serializer.validated_data

    # user = request.user

    # with transaction.atomic():
    #     user.update(
    #         username=data.get("username"),
    #         email=data.get("email"),
    #         birthday=data.get("birthday"),
    #         gender=data.get("gender"),
    #         save=False,
    #     )

    #     has_avatar = "avatar" in data
    #     if has_avatar:
    #         avatar = data.get("avatar")
    #         if avatar is None:
    #             user.delete_avatar(save=False)
    #         else:
    #             user.update_avatar(avatar, save=False)

    #     user.save()

    # user_serializer = UserInfoSerializer(
    #     user, context={"request": request}
    # )
    # return Response(user_serializer.data, status=status.HTTP_200_OK)


class DeleteAuthenticatedUser(APIView):
    permission_classes = (IsAuthenticated,)

    def __init__(self, *args):
        return


class AuthenticatedUserSetting(APIView):
    permission_classes = (IsAuthenticated,)

    def __init__(self, *args):
        return
