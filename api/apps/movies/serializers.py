from rest_framework import serializers

from apps.common.model_loaders import get_movie_model, get_rating_model


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


class RatingSerializer(serializers.ModelSerializer):
    # change format datetime field
    created_at = serializers.DateTimeField(format="%Y-%m-%d")
    updated_at = serializers.DateTimeField(format="%Y-%m-%d")

    class Meta:
        model = get_rating_model()
        fields = ("user_id", "movie_id", "rating", "created_at", "updated_at")


class RateMovieSerializer(serializers.Serializer):
    movie_id = serializers.IntegerField(required=True)
    rating = serializers.FloatField(required=True)
