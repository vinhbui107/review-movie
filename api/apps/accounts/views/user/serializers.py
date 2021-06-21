from django.conf import settings
from rest_framework import serializers

from apps.accounts.validators import (
    username_characters_validator,
    username_exists,
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
        allow_blank=False,
        validators=[username_characters_validator, username_exists],
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


class UpdateUserInfoSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    birthday = serializers.DateField(required=True)
    occupation = serializers.CharField(
        max_length=settings.OCCUPATION_MAX_LENGTH, required=True
    )
    gender = serializers.CharField(
        max_length=settings.GENDER_MAX_LENGTH, required=True
    )
    avatar = serializers.ImageField(
        max_length=None,
        use_url=True,
    )


class UserProfileSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d")

    class Meta:
        model = User
        fields = (
            "username",
            "avatar",
            "created_at",
        )
