from django.db import transaction
from rest_framework.exceptions import status

from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

from apps.accounts.views.auth.serializers import (
    LoginSerializer,
    RegisterSerializer,
)
from apps.common.responses import ApiMessageResponse
from apps.common.model_loaders import get_user_model


class Login(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = LoginSerializer


class Register(APIView):
    """
    The API to register a new user
    """

    serializer_class = RegisterSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return self.on_valid_request_data(serializer.validated_data)

    def on_valid_request_data(self, data):
        email = data.get("email")
        password = data.get("password")
        username = data.get("username")
        birthday = data.get("birthday")
        gender = data.get("gender")
        occupation = data.get("occupation")
        avatar = data.get("avatar")
        User = get_user_model()

        with transaction.atomic():
            new_user = User.objects.create_user(
                username=username,
                password=password,
                email=email,
                birthday=birthday,
                gender=gender,
                occupation=occupation,
            )
            new_user.save()

        return ApiMessageResponse(
            ("Create user successfully"), status=status.HTTP_201_CREATED
        )


class Logout(APIView):
    """
    The API to logout for user
    """

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
