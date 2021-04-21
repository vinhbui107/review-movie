from rest_framework import serializers

from apps.common.model_loaders import get_comment_model
from apps.accounts.serializers import GetUserProfileSerializer


class MovieCommentSerializer(serializers.ModelSerializer):
    user = GetUserProfileSerializer(read_only=True)
    # change format date time field
    created_at = serializers.DateTimeField(format="%Y-%m-%d")
    updated_at = serializers.DateTimeField(format="%Y-%m-%d")

    class Meta:
        model = get_comment_model()

        fields = ("id", "content", "created_at", "updated_at", "user")


class CommentMovieSerializer(serializers.Serializer):
    movie_id = serializers.IntegerField(
        required=True,
    )
    content = serializers.CharField(
        required=True,
    )
