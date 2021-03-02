from django.shortcuts import render
from django.db import transaction
from rest_framework import status
from rest_framework.exceptions import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token

from apps.accounts.serializers import RegisterSerializer, LoginSerializer


class Register(APIView):
    """
    The API to register a new user
    """

    serializer_class = RegisterSerializer

    def post(self, request):
        return super().post(request)

    def on_valid_request_date(self, data):
        return


class Login(APIView):
    """
    The API to login for user
    """

    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)
