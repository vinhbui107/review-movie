from django.conf import settings
from rest_framework import serializers
from apps.accounts.models import User
from apps.accounts.validators import (
    username_characters_validator,
    username_exists,
)


class GetUserSerializer(serializers.Serializer):
    username = serializers.CharField(
        max_length=settings.USERNAME_MAX_LENGTH,
        allow_blank=False,
        validators=[username_characters_validator, username_exists],
        required=True,
    )


class AuthenticatedProfileSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d")

    class Meta:
        model = User
        fields = (
            "username",
            "email",
            "birthday",
            "gender",
            "occupation",
            "avatar",
            "created_at",
        )

    class Meta:
        model = User


class UserProfileSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d")

    class Meta:
        model = User
        fields = (
            "username",
            "avatar",
            "created_at",
        )

    class Meta:
        model = User


class AuthenticatedUserProfileSerializer(serializers.ModelSerializer):
    # comments = None
    # ratings = None
    # rating_count = None
    # average_rating = None
    is_setting = serializers.BooleanField(default=True)
    created_at = serializers.DateTimeField(format="%Y-%m-%d")

    class Meta:
        model = User
        fields = (
            "username",
            "email",
            "birthday",
            "gender",
            "occupation",
            "avatar",
            "created_at",
            "is_setting",
        )


class UserUserProfileSerializer(serializers.ModelSerializer):
    # comments = None
    # ratings = None
    # rating_count = None
    # average_rating = None
    is_setting = serializers.BooleanField(default=False)
    created_at = serializers.DateTimeField(format="%Y-%m-%d")

    class Meta:
        model = User
        fields = (
            "username",
            "avatar",
            "created_at",
            "is_setting",
        )
