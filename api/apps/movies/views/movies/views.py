from django.db import transaction
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.exceptions import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from apps.movies.views.movies.serializers import (
    MovieSerializer,
    GetMovieSerializer,
)
from apps.common.model_loaders import get_movie_model, get_user_model
from apps.common.responses import ApiMessageResponse
from apps.common.permissions import CustomPermission
from apps.common.helpers import validate_data
from apps.common.pagination import DefaultResultsSetPagination


class Movies(ListAPIView):
    """[summary]

    Args:
        ListAPIView ([type]): [description]
    """

    serializer_class = MovieSerializer
    pagination_class = DefaultResultsSetPagination
    queryset = get_movie_model().objects.all()


class MovieItem(APIView):
    """[summary]

    Args:
        APIView ([type]): [description]
    """

    def get(self, request, movie_slug):
        data = validate_data(
            GetMovieSerializer, data={"movie_slug": movie_slug}
        )
        movie_id = data.get("movie_slug")

        Movie = get_movie_model()
        movie = Movie.get_movie_with_slug(movie_slug)

        movie_serializer = MovieSerializer(movie, context={"request": request})
        return Response(movie_serializer.data, status=status.HTTP_200_OK)


class RecommendMovies(APIView):
    """[summary]

    Args:
        APIView ([type]): [description]
    """

    def get(self, request, username):

        Movie = get_movie_model()

        user = request.user
        if user.is_anonymous:
            movies = Movie.get_movies_recommend()
        else:
            movies = Movie.get_movies_recommend_with_user(user=user)

        movies_serializer = MovieSerializer(
            movies, many=True, context={"request": request}
        )
        return Response(movies_serializer.data, status=status.HTTP_200_OK)
