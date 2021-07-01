from django.db import transaction
from rest_framework.views import APIView
from rest_framework.exceptions import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from apps.movies.views.movie.serializers import (
    MovieSerializer,
    GetMovieSerializer,
)
from apps.common.model_loaders import (
    get_movie_model,
    get_genre_model,
    get_user_model,
    get_comment_model,
    get_rating_model,
)
from apps.common.responses import ApiMessageResponse
from apps.common.permissions import CustomPermission
from apps.common.helpers import validate_data


class MovieItem(APIView):
    def get(self, request, movie_slug):
        data = validate_data(
            GetMovieSerializer, data={"movie_slug": movie_slug}
        )
        movie_id = data.get("movie_slug")

        Movie = get_movie_model()
        movie = Movie.get_movie_with_slug(movie_slug)

        movie_serializer = MovieSerializer(movie, context={"request": request})
        return Response(movie_serializer.data, status=status.HTTP_200_OK)
