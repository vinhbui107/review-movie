from rest_framework.exceptions import ValidationError

from apps.common.model_loaders import get_movie_model, get_comment_model


def movie_id_exists(movie_id):
    Movie = get_movie_model()

    if Movie.is_movie_not_exist(movie_id):
        raise ValidationError("Movie does not exist.")


def movie_comment_id_exists(movie_comment_id):
    Comment = get_comment_model()

    if Comment.is_comment_not_exist(comment_id=movie_comment_id):
        raise ValidationError("The comment does not exits.")
