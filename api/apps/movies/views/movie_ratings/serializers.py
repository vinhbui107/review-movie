from rest_framework import serializers

from apps.accounts.views.user.serializers import UserInfoSerializer
from apps.common.model_loaders import (
    get_movie_model,
    get_rating_model,
    get_genre_model,
)
from apps.movies.validators import movie_slug_exists, rating_id_exist


class RatingSerializer(serializers.ModelSerializer):
    user = UserInfoSerializer(read_only=True)
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    rating = serializers.FloatField()

    class Meta:
        model = get_rating_model()
        fields = (
            "id",
            "rating",
            "user",
            "created_at",
            "updated_at",
        )


class GetMovieRatingsSerializer(serializers.Serializer):
    movie_slug = serializers.SlugField(
        validators=[movie_slug_exists], required=True
    )


class PostRatingSerializer(serializers.Serializer):
    movie_slug = serializers.SlugField(
        validators=[movie_slug_exists], required=True
    )
    rating = serializers.FloatField(required=True)
