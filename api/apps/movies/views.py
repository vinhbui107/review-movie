from django.db import transaction

from rest_framework.views import APIView
from rest_framework.exceptions import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from apps.movies.serializers import (
    MovieSerializer,
    PostRatingMovieSerializer,
    MovieRatingSerializer,
)
from apps.common.model_loaders import (
    get_movie_model,
    get_genre_model,
    get_user_model,
    get_comment_model,
)
from apps.common.responses import ApiMessageResponse
from apps.common.permissions import CustomPermission


class MovieItem(APIView):
    """
    The API to get movie detail
    """

    def get(self, request, movie_id):
        Movie = get_movie_model()
        try:
            movie = Movie.get_movie_with_id(movie_id)
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


class MovieRatings(APIView):
    """
    The API for rating of movie
    """

    permission_classes = (CustomPermission,)

    def get(self, request, movie_id):
        # Todo check movie
        Movie = get_movie_model()
        movie_ratings = Movie.get_ratings_with_movie_id(movie_id=movie_id)
        movie_ratings_serializer = MovieRatingSerializer(
            movie_ratings, many=True, context={"request": request}
        )
        return Response(
            movie_ratings_serializer.data, status=status.HTTP_200_OK
        )

    def post(self, request, movie_id):
        request_data = self._get_request_data(request, movie_id)

        serializer = PostRatingMovieSerializer(data=request_data)
        serializer.is_valid(raise_exception=True)

        data = serializer.validated_data
        movie_id = data.get("movie_id")
        rating = data.get("rating")

        user = request.user

        with transaction.atomic():
            movie_rating = user.rating_movie_with_id(
                movie_id=movie_id, user=user, rating=rating
            )

        movie_rating_serializer = MovieRatingSerializer(
            movie_rating, context={"request": request}
        )
        return Response(
            movie_rating_serializer.data, status=status.HTTP_201_CREATED
        )

    def _get_request_data(self, request, movie_id):
        request_data = request.data.copy()
        query_params = request.query_params.dict()
        request_data.update(query_params)
        request_data["movie_id"] = movie_id
        return request_data
