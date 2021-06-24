from django.conf import settings
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from apps.accounts.validators import (
    username_characters_validator,
    username_not_taken_validator,
    email_not_taken_validator,
    user_username_exists,
    user_email_exists,
)


class LoginSerializer(TokenObtainPairSerializer):
    password = serializers.CharField(
        min_length=settings.PASSWORD_MIN_LENGTH,
        max_length=settings.PASSWORD_MAX_LENGTH,
        validators=[validate_password],
    )
    username = serializers.CharField(
        max_length=settings.USERNAME_MAX_LENGTH,
        required=True,
        validators=[username_characters_validator, user_username_exists],
    )

    @classmethod
    def get_token(cls, user):
        token = super(LoginSerializer, cls).get_token(user)
        token["user_id"] = user.id
        return token


class RegisterSerializer(serializers.Serializer):
    password = serializers.CharField(
        min_length=settings.PASSWORD_MIN_LENGTH,
        max_length=settings.PASSWORD_MAX_LENGTH,
        validators=[validate_password],
    )
    username = serializers.CharField(
        max_length=settings.USERNAME_MAX_LENGTH,
        required=True,
        validators=[
            username_characters_validator,
            username_not_taken_validator,
        ],
    )
    email = serializers.EmailField(
        required=True,
        validators=[email_not_taken_validator],
    )
    birthday = serializers.DateField(required=True)
    occupation = serializers.CharField(
        required=True, max_length=settings.OCCUPATION_MAX_LENGTH
    )
    gender = serializers.CharField(
        required=True, max_length=settings.GENDER_MAX_LENGTH
    )
