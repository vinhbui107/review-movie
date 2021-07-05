from rest_framework.pagination import PageNumberPagination


class DefaultResultsSetPagination(PageNumberPagination):
    page_size_query_param = "page_size"


class SmallResultsSetPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = "page_size"
