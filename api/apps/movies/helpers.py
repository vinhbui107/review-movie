import uuid
from os.path import splitext


def upload_to_movie_image_directory(movie, filename):
    return _upload_to_movie_directory_directory(movie, filename=filename)


def _upload_to_movie_directory_directory(movie, filename):
    extension = splitext(filename)[1].lower()
    new_filename = str(uuid.uuid4()) + extension

    path = "movies/%(movie_uuid)s/" % {"movie_uuid": str(movie.uuid)}

    return "%(path)s%(new_filename)s" % {
        "path": path,
        "new_filename": new_filename,
    }


def upload_to_actor_image_directory(actor, filename):
    return _upload_to_movie_directory_directory(actor, filename=filename)


def _upload_to_actor_directory_directory(actor, filename):
    extension = splitext(filename)[1].lower()
    new_filename = str(uuid.uuid4()) + extension

    path = "movies/%(actor_name)s/" % {"movie_uuid": str(actor.name)}

    return "%(path)s%(new_filename)s" % {
        "path": path,
        "new_filename": new_filename,
    }
