from django.conf.urls import url, include
from rest_framework_extensions.routers import ExtendedDefaultRouter
from apps.search.views import MovieDocumentView


router = ExtendedDefaultRouter()
movies = router.register(
    "movies",
    MovieDocumentView,
    basename="movie-document",
)


urlpatterns = [
    url("", include(router.urls)),
]
