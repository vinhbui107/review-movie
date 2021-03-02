from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls import include
from django.conf.urls.static import static

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


auth_patterns = [
    path("login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("register/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]

movie_patterns = []

review_patterns = []

recommend_patterns = []

api_patterns = [
    path("auth/", include(auth_patterns)),
    path("movies/", include(movie_patterns)),
    path("reviews/", include(review_patterns)),
    path("recommend/", include(recommend_patterns)),
]


urlpatterns = [
    path("api/", include(api_patterns)),
    path("admin/", admin.site.urls),
]
