from django.db import transaction

from rest_framework.views import APIView
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
    MovieCommentSerializer,
    PostMovieCommentSerializer,
    GetMovieCommentsSerializer,
)
from apps.common.responses import ApiMessageResponse


class MovieComments(APIView):
    """
    The API for comments movie
    """

    permission_classes = (CustomPermission,)

    def get(self, request, movie_id):
        request_data = self._get_request_data(request, movie_id)

        serializer = GetMovieCommentsSerializer(data=request_data)
        serializer.is_valid(raise_exception=True)

        data = serializer.validated_data
        movie_id = data.get("movie_id")

        Movie = get_movie_model()
        movie_comments = Movie.get_comments_with_movie_id(movie_id=movie_id)
        movie_comments_serializer = MovieCommentSerializer(
            movie_comments, many=True, context={"request": request}
        )
        return Response(
            movie_comments_serializer.data, status=status.HTTP_200_OK
        )

    def post(self, request, movie_id):
        request_data = self._get_request_data(request, movie_id)

        serializer = PostMovieCommentSerializer(data=request_data)
        serializer.is_valid(raise_exception=True)

        data = serializer.validated_data
        content = data.get("content")
        movie_id = data.get("movie_id")

        user = request.user

        with transaction.atomic():
            movie_comment = user.comment_movie_with_id(
                movie_id=movie_id, user=user, content=content
            )

        movie_comment_serializer = MovieCommentSerializer(
            movie_comment, context={"request": request}
        )
        return Response(
            movie_comment_serializer.data, status=status.HTTP_201_CREATED
        )

    def _get_request_data(self, request, movie_id):
        request_data = request.data.copy()
        query_params = request.query_params.dict()
        request_data.update(query_params)
        request_data["movie_id"] = movie_id
        return request_data


class CommentItem(APIView):
    """
    API for Get/Put/Delete comment item
    """

    permission_classes = (CustomPermission,)

    def get(self, request, comment_id):
        Comment = get_comment_model()
        try:
            movie = Comment.get_comment_with_id(comment_id)
            movie_serializer = MovieCommentSerializer(
                movie, context={"request": request}
            )
            return Response(movie_serializer.data, status=status.HTTP_200_OK)
        except Comment.DoesNotExist:
            return ApiMessageResponse(
                "Comment not found", status=status.HTTP_404_NOT_FOUND
            )

    def put(self, request, comment_id):
        return

    def delete(self, request, comment_id):
        return

    def _get_request_data(self, request, comment_id):
        request_data = request.data.copy()
        request_data["comment_id"] = comment_id
        return request_data
