from rest_framework import serializers

from apps.accounts.views.user.serializers import UserProfileSerializer
from apps.movies.validators import movie_slug_exists
from apps.comments.validators import comment_id_exists
from apps.common.model_loaders import get_comment_model


class GetCommentsSerializer(serializers.Serializer):
    movie_slug = serializers.SlugField(
        validators=[movie_slug_exists],
        required=True,
    )


class GetCommentItemSerializer(serializers.Serializer):
    comment_id = serializers.IntegerField(
        validators=[comment_id_exists],
        required=True,
    )


class PostMovieCommentSerializer(serializers.Serializer):
    movie_slug = serializers.SlugField(
        validators=[movie_slug_exists],
        required=True,
    )
    content = serializers.CharField(required=True)


class CommentSerializer(serializers.ModelSerializer):
    user = UserProfileSerializer(read_only=True)
    updated_at = serializers.DateTimeField(format="%Y-%m-%d")

    class Meta:
        model = get_comment_model()

        fields = (
            "id",
            "content",
            "user",
            "updated_at",
        )
