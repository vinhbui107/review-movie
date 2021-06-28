from rest_framework.exceptions import AuthenticationFailed


def check_password_matches(user, password):
    if not user.check_password(password):
        raise AuthenticationFailed("Wrong password.")
