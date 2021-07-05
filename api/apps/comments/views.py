from django.db import transaction

from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView
from rest_framework.exceptions import status
from rest_framework.response import Response
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny

from apps.common.model_loaders import (
    get_movie_model,
    get_genre_model,
    get_user_model,
    get_comment_model,
)
from apps.common.permissions import CustomPermission
from apps.comments.serializers import (
    CommentSerializer,
    GetCommentsSerializer,
    GetCommentItemSerializer,
    PostMovieCommentSerializer,
)
from apps.common.responses import ApiMessageResponse
from apps.common.helpers import validate_data, get_request_data
from apps.common.pagination import DefaultResultsSetPagination


class Comments(ListCreateAPIView):
    """[summary]

    Args:
        ListCreateAPIView ([type]): [description]

    Returns:
        [type]: [description]
    """

    permission_classes = (CustomPermission,)
    serializer_class = CommentSerializer
    pagination_class = DefaultResultsSetPagination
    queryset = get_comment_model().objects.all()

    def get_queryset(self):
        qs = super(Comments, self).get_queryset()

        data = validate_data(
            GetCommentsSerializer,
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

        data = validate_data(PostMovieCommentSerializer, request_data)
        movie_slug = data.get("movie_slug")
        content = data.get("content")

        user = request.user

        with transaction.atomic():
            movie_comment = user.comment_with_movie_slug(
                movie_slug=movie_slug, user=user, content=content
            )

        movie_comment_serializer = CommentSerializer(
            movie_comment, context={"request": request}
        )
        return Response(
            movie_comment_serializer.data, status=status.HTTP_201_CREATED
        )


class CommentItem(APIView):
    """[summary]

    Args:
        APIView ([type]): [description]

    Returns:
        [type]: [description]
    """

    permission_classes = (CustomPermission,)

    def get(self, request, comment_id):
        data = validate_data(
            GetCommentItemSerializer, data={"comment_id": comment_id}
        )
        comment_id = data.get("comment_id")

        Comment = get_comment_model()
        comment = Comment.get_comment_with_id(comment_id)

        comment_serializer = CommentSerializer(
            comment, context={"request": request}
        )
        return Response(comment_serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, comment_id):
        return

    def delete(self, request, comment_id):
        return
