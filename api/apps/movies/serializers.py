from rest_framework import serializers

from apps.accounts.views.user.serializers import UserInfoSerializer
from apps.common.model_loaders import (
    get_movie_model,
    get_rating_model,
    get_genre_model,
)
from apps.movies.validators import movie_id_exists, rating_id_exist
from apps.common.serializers_fields.movie import (
    CommentCountField,
    RatingInfoField,
    RatingValueField,
)


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_genre_model()
        fields = ("name",)


class MovieSerializer(serializers.ModelSerializer):
    genres = GenreSerializer(read_only=True, many=True)
    comment_count = CommentCountField()
    rating_info = RatingInfoField()
    rated = RatingValueField()

    class Meta:
        model = get_movie_model()

        fields = (
            "title",
            "genres",
            "description",
            "year",
            "director",
            "poster",
            "imdb_rating",
            "rating_average",
            "rating_count",
            "view_count",
            "comment_count",
            "rating_info",
            "rated",
            "slug",
        )


class RatingSerializer(serializers.ModelSerializer):
    user = UserInfoSerializer(read_only=True)
    created_at = serializers.DateTimeField(format="%Y-%m-%d")
    updated_at = serializers.DateTimeField(format="%Y-%m-%d")
    rating = serializers.FloatField()

    class Meta:
        model = get_rating_model()
        fields = (
            "id",
            "user",
            "movie_id",
            "rating",
            "created_at",
            "updated_at",
        )


class GetMovieSerializer(serializers.Serializer):
    movie_id = serializers.IntegerField(
        validators=[movie_id_exists], required=True
    )


class PostRatingSerializer(serializers.Serializer):
    movie_id = serializers.IntegerField(
        validators=[movie_id_exists], required=True
    )
    rating = serializers.FloatField(required=True)
