import re
from rest_framework.exceptions import ValidationError, NotFound

from api.apps.accounts.models import User


def username_characters_validator(username):
    if not re.match("^[a-zA-Z0-9_.]*$", username):
        raise ValidationError(
            "Usernames can only contain alphanumeric characters, periods and underscores."
        )


def username_not_taken_validator(username):
    if User.is_username_taken(username):
        raise ValidationError("The username is already taken.")


def email_not_taken_validator(email):
    if User.is_email_taken(email):
        raise ValidationError("An account for the email already exists.")


def user_username_exists(username):
    if not User.user_with_username_exists(username=username):
        raise NotFound("No user with the provided username exists.")


def user_email_exists(email):
    if not User.objects.filter(email=email).exists():
        raise NotFound("No user with the provided email exists.")
