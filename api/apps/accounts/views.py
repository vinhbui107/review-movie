from django.shortcuts import render
from django.db import transaction, DatabaseError
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.exceptions import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.authentication import JWTAuthentication

from apps.accounts.serializers import (
    RegisterSerializer,
    MyTokenObtainPairSerializer,
    GetUserProfileSerializer,
    UpdateUserProfileRequestSerializer,
)
from apps.common.responses import ApiMessageResponse
from .models import User


class ObtainTokenPairWithColorView(TokenObtainPairView):
    permission_classes = (AllowAny,)

    serializer_class = MyTokenObtainPairSerializer


class Register(APIView):
    """
    The API to register a new user
    """

    serializer_class = RegisterSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return self.on_valid_request_data(serializer.validated_data)

    def on_valid_request_data(self, data):
        email = data.get("email")
        password = data.get("password")
        username = data.get("username")
        birthday = data.get("birthday")
        gender = data.get("gender")
        occupation = data.get("occupation")
        avatar = data.get("avatar")
        User = get_user_model()

        with transaction.atomic():
            new_user = User.objects.create_user(
                username=username,
                password=password,
                email=email,
                birthday=birthday,
                gender=gender,
                occupation=occupation,
            )
            new_user.save()

        return ApiMessageResponse(
            ("Create user successfully"), status=status.HTTP_201_CREATED
        )


class Logout(APIView):
    """
    The API to logout for user
    """

    permission_classes = (AllowAny,)

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UserProfile(APIView):
    """
    The API to update profile for user
    """

    permission_classes = (IsAuthenticated,)

    def get(self, request, user_id):
        user = request.user
        user_profile = user.get_user_profile_with_id(user_id)

        if user_profile:
            user_profile_serializer = GetUserProfileSerializer(
                user_profile, context={"request": request}
            )
            return Response(
                user_profile_serializer.data, status=status.HTTP_200_OK
            )
        else:
            return ApiMessageResponse(
                "User not found", status=status.HTTP_404_NOT_FOUND
            )

    def put(self, request, user_id):
        request_data = self._get_request_data(request, user_id)

        serializer = UpdateUserProfileRequestSerializer(data=request_data)
        serializer.is_valid(raise_exception=True)

        data = serializer.validated_data
        user_id = data.get("user_id")
        username = data.get("username")
        password = data.get("password")
        email = data.get("email")
        birthday = data.get("birthday")
        gender = data.get("gender")
        occupation = data.get("occupation")

        user = request.user

        try:
            with transaction.atomic():
                user_profile_updated = user.update_user_profile_with_id(
                    user_id=user_id,
                    username=username,
                    password=password,
                    email=email,
                    birthday=birthday,
                    gender=gender,
                    occupation=occupation,
                )
        except DatabaseError:
            return ApiMessageResponse(
                DatabaseError, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        user_profile_serializer = GetUserProfileSerializer(
            user_profile_updated, context={"request": request}
        )

        return Response(user_profile_serializer.data, status.HTTP_200_OK)

    def _get_request_data(self, request, user_id):
        request_data = request.data.copy()
        request_data["user_id"] = user_id
        return request_data
