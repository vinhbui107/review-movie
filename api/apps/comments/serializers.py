from rest_framework import serializers

from apps.common.model_loaders import get_comment_model
from apps.accounts.serializers import GetUserProfileSerializer
from apps.comments.validators import movie_id_exists, movie_comment_id_exists


class MovieCommentSerializer(serializers.ModelSerializer):
    user = GetUserProfileSerializer(read_only=True)
    # change format date time field
    created_at = serializers.DateTimeField(format="%Y-%m-%d")
    updated_at = serializers.DateTimeField(format="%Y-%m-%d")

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


class GetMovieCommentSerializer(serializers.Serializer):
    movie_id = serializers.IntegerField(
        validators=[movie_id_exists],
        required=True,
    )
    comment_id = serializers.IntegerField(
        validators=[movie_comment_id_exists],
        required=True,
    )


class RequestMovieCommentSerializer(serializers.Serializer):
    movie_id = serializers.IntegerField(
        validators=[movie_id_exists],
        required=True,
    )
    movie_comment_id = serializers.IntegerField(
        validators=[movie_comment_id_exists],
        required=True,
    )
