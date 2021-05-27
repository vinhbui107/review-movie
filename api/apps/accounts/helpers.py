import uuid
from os.path import splitext


def upload_to_user_avatar_directory(user, filename):
    return _upload_to_user_directory(user=user, filename=filename)


def _upload_to_user_directory(user, filename):
    extension = splitext(filename)[1].lower()
    new_filename = str(uuid.uuid4()) + extension

    path = "avatars/%(username)s/" % {"username": str(user.username)}

    return "%(path)s%(new_filename)s" % {
        "path": path,
        "new_filename": new_filename,
    }
