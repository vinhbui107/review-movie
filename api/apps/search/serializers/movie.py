import json

from rest_framework import serializers
from django_elasticsearch_dsl_drf.serializers import DocumentSerializer

from apps.search.documents import MovieDocument
from apps.search.serializers.genre import GenreSerializer


class MovieDocumentSerializer(DocumentSerializer):
    """Serializer for Movie document."""

    genres = serializers.SerializerMethodField()

    class Meta(object):
        """Meta options."""

        document = MovieDocument
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
            "genres",
        )
        read_only_fields = fields

    def get_genres(self, obj):
        if obj.genres:
            return list(obj.genres)
        else:
            return []
