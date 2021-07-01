from django.conf import settings
from django.contrib.auth.password_validation import validate_password

from rest_framework import serializers

from apps.accounts.validators import (
    username_characters_validator,
    username_not_taken_validator,
    email_not_taken_validator,
    user_username_exists,
    user_email_exists,
)
from apps.accounts.models import User
from apps.common.model_loaders import (
    get_rating_model,
    get_comment_model,
    get_movie_model,
)
from apps.common.serializers_fields.user import (
    RatingsCountField,
    RatingsAverageField,
    CommentsCountField,
    IsSettingField,
)


class GetUserDataSerializer(serializers.Serializer):
    username = serializers.CharField(
        max_length=settings.USERNAME_MAX_LENGTH,
        validators=[username_characters_validator, user_username_exists],
        required=True,
    )


class UserInfoSerializer(serializers.ModelSerializer):
    ratings_count = RatingsCountField()
    ratings_average = RatingsAverageField()
    comments_count = CommentsCountField()
    is_setting = IsSettingField()
    date_joined = serializers.DateTimeField(format="%Y-%m-%d")
    last_login = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")

    class Meta:
        model = User
        fields = (
            "username",
            "avatar",
            "date_joined",
            "last_login",
            "is_setting",
            "ratings_count",
            "ratings_average",
            "comments_count",
        )


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_movie_model()
        fields = (
            "id",
            "title",
            "year",
            "description",
            "poster",
            "rating_average",
            "slug",
        )


class UserRatingsSerializer(serializers.ModelSerializer):
    movie = MovieSerializer(read_only=True)
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")

    class Meta:
        model = get_rating_model()
        fields = (
            "movie",
            "rating",
            "updated_at",
        )


class UserCommentsSerializer(serializers.ModelSerializer):
    movie = MovieSerializer(read_only=True)
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")

    class Meta:
        model = get_comment_model()
        fields = (
            "movie",
            "content",
            "updated_at",
        )


class AuthenticatedUserInfoSerializer(serializers.ModelSerializer):
    date_joined = serializers.DateTimeField(format="%Y-%m-%d")
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    last_login = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")

    class Meta:
        model = User
        fields = (
            "username",
            "birthday",
            "gender",
            "last_login",
            "avatar",
            "date_joined",
            "updated_at",
        )


class UpdateAuthenticatedUserSerializer(serializers.Serializer):
    username = serializers.CharField(
        max_length=settings.USERNAME_MAX_LENGTH,
        validators=[username_characters_validator],
        required=False,
        allow_blank=False,
    )
    email = serializers.EmailField(
        required=False,
        allow_blank=False,
    )
    birthday = serializers.DateField(
        required=False,
    )
    occupation = serializers.CharField(
        max_length=settings.OCCUPATION_MAX_LENGTH,
        required=False,
        allow_blank=False,
    )
    gender = serializers.CharField(
        max_length=settings.GENDER_MAX_LENGTH,
        required=False,
        allow_blank=False,
    )
    avatar = serializers.ImageField(
        use_url=True,
        required=False,
    )


class DeleteAuthenticatedUserSerializer(serializers.Serializer):
    password = serializers.CharField(required=True, allow_blank=False)


class UpdateAuthenticatedUserSettingsSerializer(serializers.Serializer):
    current_password = serializers.CharField(required=False, allow_blank=False)
    new_password = serializers.CharField(
        min_length=settings.PASSWORD_MIN_LENGTH,
        max_length=settings.PASSWORD_MAX_LENGTH,
        validators=[validate_password],
        required=False,
        allow_blank=False,
    )

    def validate(self, data):
        if "new_password" not in data and "current_password" in data:
            raise serializers.ValidationError(
                "New password must be supplied together with the current password"
            )

        if "new_password" in data and "current_password" not in data:
            raise serializers.ValidationError(
                "Current password must be supplied together with the new password"
            )

        return data


class UserProfileSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d")

    class Meta:
        model = User
        fields = (
            "username",
            "avatar",
            "created_at",
        )
