from rest_framework.views import APIView


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
        return


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
