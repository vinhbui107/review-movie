from rest_framework.views import APIView


class MovieItem(APIView):
    """
    The API to get movie detail
    """

    def get(self, request, slug):
        return


class GenreMovies(APIView):
    """
    The API to get all movies of genre
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
        return
