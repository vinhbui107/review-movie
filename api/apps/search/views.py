from rest_framework.permissions import AllowAny
from django_elasticsearch_dsl_drf.constants import (
    SUGGESTER_COMPLETION,
    FUNCTIONAL_SUGGESTER_COMPLETION_PREFIX,
)
from django_elasticsearch_dsl_drf.filter_backends import (
    FilteringFilterBackend,
    OrderingFilterBackend,
    SearchFilterBackend,
    SuggesterFilterBackend,
)
from django_elasticsearch_dsl_drf.viewsets import DocumentViewSet

from apps.search.documents import MovieDocument
from apps.search.serializers.movie import MovieDocumentSerializer
from apps.common.permissions import SearchPermission


class MovieDocumentView(DocumentViewSet):
    document = MovieDocument
    serializer_class = MovieDocumentSerializer
    lookup_field = "id"
    filter_backends = [
        FilteringFilterBackend,
        OrderingFilterBackend,
        SearchFilterBackend,
    ]

    # Suggester fields
    suggester_fields = {
        "title_suggest": {
            "field": "title.suggest",
            "suggesters": [
                SUGGESTER_COMPLETION,
            ],
            "default_suggester": SUGGESTER_COMPLETION,
        },
    }

    # Functional suggester fields
    functional_suggester_fields = {
        "title_suggest": {
            "field": "title.raw",
            "suggesters": [
                FUNCTIONAL_SUGGESTER_COMPLETION_PREFIX,
            ],
            "default_suggester": FUNCTIONAL_SUGGESTER_COMPLETION_PREFIX,
            # 'serializer_field': 'title',
        },
    }

    # Define search fields
    search_fields = (
        "title",
        "description",
        "director",
        "genres",
    )

    # Define filtering fields
    filter_fields = {
        "id": None,
        "title": "title.raw",
        "year": "year.raw",
        "rating_average": "rating_average.raw",
        "genres": "genres.raw",
        "imdb_rating": "imdb_rating.raw",
    }

    # Define ordering fields
    ordering_fields = {
        "id": None,
        "title": None,
        "year": None,
        "rating_average": None,
        "genres": None,
        "imdb_rating": None,
    }

    # Specify default ordering
    ordering = (
        "id",
        "imdb_rating",
        "rating_average",
    )
