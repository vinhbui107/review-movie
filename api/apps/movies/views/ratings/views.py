from django.db import transaction
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView
from rest_framework.exceptions import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from apps.movies.views.ratings.serializers import (
    RatingSerializer,
    PostRatingSerializer,
    GetRatingsSerializer,
    GetRatingItemSerializer,
)
from apps.common.model_loaders import get_movie_model, get_rating_model
from apps.common.responses import ApiMessageResponse
from apps.common.permissions import CustomPermission
from apps.common.helpers import validate_data, get_request_data
from apps.common.pagination import DefaultResultsSetPagination


class Ratings(ListCreateAPIView):
    """[summary]

    Args:
        ListCreateAPIView ([type]): [description]

    Returns:
        [type]: [description]
    """

    permission_classes = (CustomPermission,)
    serializer_class = RatingSerializer
    pagination_class = DefaultResultsSetPagination
    queryset = get_rating_model().objects.all()

    def get_queryset(self):
        qs = super(Ratings, self).get_queryset()

        data = validate_data(
            GetRatingsSerializer,
            data={
                "movie_slug": self.request.query_params.get("movie_slug", None)
            },
        )
        movie_slug = data.get("movie_slug")

        if movie_slug is not None:
            return qs.filter(movie__slug=movie_slug)

        return qs

    def post(self, request):
        request_data = get_request_data(request)

        data = validate_data(PostRatingSerializer, request_data)
        movie_slug = data.get("movie_slug")
        rating = data.get("rating")

        user = request.user

        with transaction.atomic():
            movie_rating = user.rating_with_movie_slug(
                movie_slug=movie_slug, user=user, rating=rating
            )

        movie_rating_serializer = RatingSerializer(
            movie_rating, context={"request": request}
        )
        return Response(
            movie_rating_serializer.data, status=status.HTTP_200_OK
        )


class RatingItem(APIView):

    permission_classes = (CustomPermission,)

    def get(self, request, rating_id):
        data = validate_data(
            GetRatingItemSerializer, data={"rating_id": rating_id}
        )
        rating_id = data.get("rating_id")

        Rating = get_rating_model()
        rating = Rating.get_with_id(rating_id)

        rating_serializer = RatingSerializer(
            rating, context={"request": request}
        )
        return Response(rating_serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, rating_id):
        data = validate_data(
            GetRatingItemSerializer, data={"rating_id": rating_id}
        )
        rating_id = data.get("rating_id")

        Rating = get_rating_model()

        with transaction.atomic():
            rating = Rating.delete_with_id(rating_id)

        return ApiMessageResponse(
            "Delete rating successfully.", status=status.HTTP_200_OK
        )
