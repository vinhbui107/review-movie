from django.apps import apps


def get_user_model():
    return apps.get_model("accounts", "User")


def get_movie_model():
    return apps.get_model("movies", "Movie")


def get_rating_model():
    return apps.get_model("movies", "Rating")


def get_genre_model():
    return apps.get_model("movies", "Genre")


def get_comment_model():
    return apps.get_model("comments", "Comment")
