from rest_framework import serializers
from django.conf import settings
from django.contrib.auth.password_validation import validate_password

from api.apps.accounts.validators import (
    username_characters_validator,
    username_not_taken_validator,
    email_not_taken_validator,
    user_email_exists,
    user_username_exists,
)


class RegisterSerializer(serializers.Serializer):
    password = serializers.CharField(
        min_length=PASSWORD_MIN_LENGTH,
        max_length=PASSWORD_MAX_LENGTH,
        validators=[validate_password],
    )
    username = serializers.CharField(
        max_length=USERNAME_MAX_LENGTH,
        required=True,
        validators=[
            username_characters_validator,
            username_not_taken_validator,
        ],
    )
    email = serializers.EmailField(validators=[email_not_taken_validator])
    name = serializers.CharField(
        max_length=PROFILE_NAME_MAX_LENGTH,
        allow_blank=False,
        validators=[name_characters_validator],
    )
