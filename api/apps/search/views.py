from django_elasticsearch_dsl_drf.constants import (
    LOOKUP_FILTER_TERMS,
    LOOKUP_FILTER_RANGE,
    LOOKUP_FILTER_PREFIX,
    LOOKUP_FILTER_WILDCARD,
    LOOKUP_QUERY_IN,
    LOOKUP_QUERY_GT,
    LOOKUP_QUERY_GTE,
    LOOKUP_QUERY_LT,
    LOOKUP_QUERY_LTE,
    LOOKUP_QUERY_EXCLUDE,
)
from django_elasticsearch_dsl_drf.filter_backends import (
    FilteringFilterBackend,
    IdsFilterBackend,
    OrderingFilterBackend,
    DefaultOrderingFilterBackend,
    SearchFilterBackend,
)
from django_elasticsearch_dsl_drf.viewsets import BaseDocumentViewSet
from django_elasticsearch_dsl_drf.pagination import PageNumberPagination

from .documents import MovieDocument
from .serializers import MovieDocumentSerializer


# class MovieDocumentView(BaseDocumentViewSet):
#     document = MovieDocument
#     serializer_class = MovieDocumentSerializer
#     pagination_class = PageNumberPagination

#     filter_backends = [
#         FilteringFilterBackend,
#         IdsFilterBackend,
#         OrderingFilterBackend,
#         DefaultOrderingFilterBackend,
#         SearchFilterBackend,
#     ]

#     search_fields = ("title", "description", "year")
