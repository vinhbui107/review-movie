from rest_framework.exceptions import ValidationError

from apps.common.model_loaders import get_movie_model, get_comment_model


def movie_id_exists(movie_id):
    Movie = get_movie_model()

    if not Movie.objects.filter(pk=movie_id).exists():
        raise ValidationError("The movie does not exist.")


def movie_comment_id_exists(movie_comment_id):
    Comment = get_comment_model()

    if not Comment.objects.filter(pk=movie_comment_id).exist():
        raise ValidationError("The comment does not exits.")
