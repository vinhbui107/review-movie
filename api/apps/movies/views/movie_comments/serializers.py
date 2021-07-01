from rest_framework import serializers

from apps.accounts.views.user.serializers import UserProfileSerializer
from apps.movies.validators import movie_slug_exists
from apps.movies.validators import movie_comment_id_exists
from apps.common.model_loaders import get_comment_model


class CommentSerializer(serializers.ModelSerializer):
    user = UserProfileSerializer(read_only=True)
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")

    class Meta:
        model = get_comment_model()

        fields = (
            "id",
            "content",
            "user",
            "created_at",
            "updated_at",
        )


class PostMovieCommentSerializer(serializers.Serializer):
    movie_slug = serializers.SlugField(
        validators=[movie_slug_exists],
        required=True,
    )
    content = serializers.CharField(required=True)


class GetMovieCommentsSerializer(serializers.Serializer):
    movie_slug = serializers.SlugField(
        validators=[movie_slug_exists],
        required=True,
    )
