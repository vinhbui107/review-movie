from rest_framework.exceptions import ValidationError, NotFound

from apps.common.model_loaders import (
    get_movie_model,
    get_rating_model,
    get_comment_model,
)


def movie_slug_exists(movie_slug):
    Movie = get_movie_model()

    if not Movie.objects.filter(slug=movie_slug).exists():
        raise NotFound(
            "The Movie does not exist.",
        )


def rating_id_exist(rating_id):
    Rating = get_rating_model()

    if not Rating.objects.filter(pk=rating_id).exists():
        raise NotFound(
            "The Rating does not exist.",
        )
