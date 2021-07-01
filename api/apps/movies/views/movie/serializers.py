from rest_framework import serializers

from apps.common.model_loaders import (
    get_movie_model,
    get_genre_model,
)
from apps.movies.validators import movie_slug_exists, rating_id_exist
from apps.common.serializers_fields.movie import (
    CommentCountField,
    RatingInfoField,
    RatingValueField,
)


class GetMovieSerializer(serializers.Serializer):
    movie_slug = serializers.SlugField(
        validators=[movie_slug_exists], required=True
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
