from rest_framework.exceptions import AuthenticationFailed
from rest_framework.exceptions import ValidationError

from apps.common.model_loaders import get_user_model


def check_password_matches(user, password):
    if not user.check_password(password):
        raise AuthenticationFailed("Wrong password.")


def check_username_not_taken(user, username):
    if username == user.username:
        return

    User = get_user_model()

    if User.is_username_taken(username=username):
        raise ValidationError("The username is already taken.")


def check_email_not_taken(user, email):
    if email == user.email:
        return

    User = get_user_model()

    if User.is_email_taken(email=email):
        raise ValidationError("The email is already taken.")
