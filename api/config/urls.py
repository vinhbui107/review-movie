from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls import include
from django.conf.urls.static import static

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from apps.accounts.views import (
    ObtainTokenPairWithColorView,
    Register,
    Logout,
    UserProfile,
)

from apps.movies.views import TrendingMovies, TopRatingMovies, HomeMovies


auth_patterns = [
    path(
        "login/",
        ObtainTokenPairWithColorView.as_view(),
        name="token_obtain_pair",
    ),
    path("login/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("logout/", Logout.as_view(), name="auth_logout"),
    path("register/", Register.as_view(), name="auth_register"),
]

movie_patterns = [
    path("home/", TopRatingMovies.as_view(), name="home-movies"),
    path("trending/", TrendingMovies.as_view(), name="trending-movies"),
    path("top-rating/", TopRatingMovies.as_view(), name="top-movies"),
]

review_patterns = []

user_patterns = [
    path("<int:user_id>", UserProfile.as_view(), name="user_profile")
]

api_patterns = [
    path("auth/", include(auth_patterns)),
    path("movies/", include(movie_patterns)),
    path("reviews/", include(review_patterns)),
    path("users/", include(user_patterns)),
]


urlpatterns = [
    path("api/", include(api_patterns)),
    path("admin/", admin.site.urls),
]
