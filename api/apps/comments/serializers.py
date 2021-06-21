from rest_framework import serializers

from apps.accounts.views.user.serializers import UserProfileSerializer
from apps.comments.validators import movie_id_exists, movie_comment_id_exists
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
    movie_id = serializers.IntegerField(
        validators=[movie_id_exists],
        required=True,
    )
    content = serializers.CharField(required=True)


class GetMovieCommentsSerializer(serializers.Serializer):
    movie_id = serializers.IntegerField(
        validators=[movie_id_exists],
        required=True,
    )
