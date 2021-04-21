from django_elasticsearch_dsl_drf.serializers import DocumentSerializer

from apps.search.documents import MovieDocument


class MovieDocumentSerializer(DocumentSerializer):
    """Serializer for the document."""

    class Meta(object):

        # Specify the correspondent document class
        document = MovieDocument

        # List the serializer fields. Note, that the order of the fields
        # is preserved in the ViewSet.
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
