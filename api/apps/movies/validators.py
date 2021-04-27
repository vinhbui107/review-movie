from rest_framework.exceptions import ValidationError

from apps.common.model_loaders import get_movie_model,


def movie_id_exists(movie_id):
    Movie = get_movie_model()

    if Movie.is_movie_not_exist(movie_id):
        raise ValidationError("Movie does not exist.")


def rating_id_exist(rating_id):
    Rating = get
