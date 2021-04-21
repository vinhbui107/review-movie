from rest_framework.views import APIView
from rest_framework.exceptions import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from apps.common.model_loaders import (
    get_movie_model,
    get_genre_model,
    get_user_model,
    get_comment_model,
)
from apps.common.responses import ApiMessageResponse
from apps.movies.serializers import MovieSerializer


class MovieItem(APIView):
    """
    The API to get movie detail
    """

    def get(self, request, movie_id):
        Movie = get_movie_model()
        try:
            movie = Movie.objects.get(pk=movie_id)
            movie_serializer = MovieSerializer(
                movie, context={"request": request}
            )
            return Response(movie_serializer.data, status=status.HTTP_200_OK)
        except Movie.DoesNotExist:
            return ApiMessageResponse(
                "Movie not found", status=status.HTTP_404_NOT_FOUND
            )


class TrendingMovies(APIView):
    """
    The API to get trending movies
    """

    def get(self, request):
        Movie = get_movie_model()
        movies = Movie.get_trending_movies()[:30]
        movies_serializer = MovieSerializer(
            movies, many=True, context={"request": request}
        )
        return Response(movies_serializer.data, status=status.HTTP_200_OK)


class TopRatingMovies(APIView):
    """
    The API to get top rating movies
    """

    def get(self, request):
        Movie = get_movie_model()
        movies = Movie.get_top_rating_movies()[:30]
        movies_serializer = MovieSerializer(
            movies, many=True, context={"request": request}
        )
        return Response(movies_serializer.data, status=status.HTTP_200_OK)


class RatingMovie(APIView):
    """
    The API for rating of movie
    """

    def get(self, request, movie_id):
        return

    def post(self, request, movie_id):
        return


class UserRatingMovie(APIView):
    """
    The API to get rating of current user for movie
    """

    permission_classes = [IsAuthenticated]

    def get(self, request, movie_id):
        return
