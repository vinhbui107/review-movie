from rest_framework import serializers
from django.conf import settings
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from apps.accounts.validators import (
    username_characters_validator,
    username_not_taken_validator,
    email_not_taken_validator,
    username_exists,
    user_id_exist,
)
from apps.common.model_loaders import get_user_model


class UpdateUserProfileRequestSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    birthday = serializers.DateField(required=True)
    occupation = serializers.CharField(
        max_length=settings.OCCUPATION_MAX_LENGTH, required=True
    )
    gender = serializers.CharField(
        max_length=settings.GENDER_MAX_LENGTH, required=True
    )
    password = serializers.CharField(
        min_length=settings.PASSWORD_MIN_LENGTH,
        max_length=settings.PASSWORD_MAX_LENGTH,
    )


class GetUserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = (
            "username",
            "email",
            "birthday",
            "gender",
            "occupation",
            "avatar",
        )


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)
        token["name"] = user.username
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
    email = serializers.EmailField(validators=[email_not_taken_validator])
    birthday = serializers.DateField()
    occupation = serializers.CharField(
        max_length=settings.OCCUPATION_MAX_LENGTH
    )
    gender = serializers.CharField(max_length=settings.GENDER_MAX_LENGTH)
