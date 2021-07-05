from rest_framework import serializers

from apps.accounts.views.user.serializers import UserInfoSerializer
from apps.movies.validators import movie_slug_exists, rating_id_exist
from apps.common.model_loaders import (
    get_movie_model,
    get_rating_model,
    get_genre_model,
)


class GetRatingsSerializer(serializers.Serializer):
    movie_slug = serializers.SlugField(
        validators=[movie_slug_exists], required=True
    )


class GetRatingItemSerializer(serializers.Serializer):
    rating_id = serializers.IntegerField(
        validators=[rating_id_exist], required=True
    )


class PostRatingSerializer(serializers.Serializer):
    movie_slug = serializers.SlugField(
        validators=[movie_slug_exists], required=True
    )
    rating = serializers.FloatField(
        required=True, min_value=0.0, max_value=5.0
    )


class RatingSerializer(serializers.ModelSerializer):
    user = UserInfoSerializer(read_only=True)
    updated_at = serializers.DateTimeField(format="%Y-%m-%d")
    rating = serializers.FloatField()

    class Meta:
        model = get_rating_model()
        fields = (
            "id",
            "rating",
            "user",
            "updated_at",
        )
