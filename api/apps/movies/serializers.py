from rest_framework import serializers

from apps.accounts.serializers import GetUserProfileSerializer
from apps.common.model_loaders import get_movie_model, get_rating_model
from apps.movies.validators import movie_id_exists, rating_id_exist


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_movie_model()

        fields = (
            "id",
            "title",
            "description",
            "year",
            "director",
            "poster",
            "imdb_rating",
            "rating_average",
            "rating_count",
            "slug",
        )


class MovieRatingSerializer(serializers.ModelSerializer):
    user = GetUserProfileSerializer(read_only=True)
    # change format datetime field
    created_at = serializers.DateTimeField(format="%Y-%m-%d")
    updated_at = serializers.DateTimeField(format="%Y-%m-%d")

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


class GetMovieRatingsSerializer(serializers.Serializer):
    movie_id = serializers.IntegerField(
        validators=[movie_id_exists], required=True
    )


class PostMovieRatingSerializer(serializers.Serializer):
    movie_id = serializers.IntegerField(
        validators=[movie_id_exists], required=True
    )
    rating = serializers.FloatField(required=True)


class UpdateRatingSerializer(serializers.Serializer):
    rating_id = serializers.IntegerField(
        validators=[rating_id_exist], required=True
    )
    rating = serializers.FloatField(required=True)
