from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls import include
from django.conf.urls.static import static

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from apps.accounts.views import Register
from apps.accounts.views import (
    MovieItem,
    GenreMovies,
    TrendingMovies,
    TopRatingMovies,
)


auth_patterns = [
    path("register/", Register.as_view(), name="register-user"),
]

movie_patterns = [
    path("trending/", TrendingMovies.as_view(), name="trending-movies"),
    path("top-rating/", TopRatingMovies.as_view(), name="top-movies"),
    path("<slug>/", MovieItem.as_view(), name="detail-movie"),
    path("<slug>/", GenreMovies.as_view(), name="genre-movies"),
]

review_patterns = []

recommend_patterns = []

api_patterns = [
    path("auth/", include(auth_patterns)),
    path("movies/", include(movie_patterns)),
    path("reviews/", include(review_patterns)),
    path("recommend/", include(recommend_patterns)),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]


urlpatterns = [
    path("api/", include(api_patterns)),
    path("admin/", admin.site.urls),
]
