from django.conf import settings
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from apps.accounts.validators import (
    email_not_taken_validator,
    user_id_exist,
    username_characters_validator,
    username_not_exists,
    username_not_taken_validator,
)
from apps.common.model_loaders import get_user_model, get_rating_model


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
    created_at = serializers.DateTimeField(format="%Y-%m-%d")

    class Meta:
        model = get_user_model()
        fields = (
            "username",
            "email",
            "birthday",
            "gender",
            "occupation",
            "avatar",
            "created_at",
        )


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)
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


class UserRatingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_rating_model()
        fields = ("id", "rating", "movie_id", "created_at", "updated_at")
