from rest_framework.views import APIView
from rest_framework.exceptions import status
from rest_framework.response import Response

from apps.movies.models import Movie, Genre, Rating
from apps.accounts.models import User


class MovieItem(APIView):
    """
    The API to get movie detail
    """

    def get(self, request, slug):
        return


class TrendingMovies(APIView):
    """
    The API to get trending movies
    """

    def get(self, request):
        return


class TopRatingMovies(APIView):
    """
    The API to get top imdb rating movies
    """

    def get(self, request):
        top_rating_movies = Movie.get_top_rating_movies()
        return Response(top_rating_movies, status=status.HTTP_200_OK)


class HomeMovies(APIView):
    """
    The API to get movie for home page
    """

    def get(self, request):
        return


class MovieRatings(APIView):
    """
    The API to get ratings of movie
    """

    def get(self, request):
        return
