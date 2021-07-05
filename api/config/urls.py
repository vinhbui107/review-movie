from django.conf import settings
from django.conf.urls import include
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path

from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from apps.accounts.views.auth.views import Login, Logout, Register
from apps.accounts.views.user.views import (
    Users,
    GetUserInfo,
    UserRatings,
    UserComments,
    AuthenticatedUser,
    DeleteAuthenticatedUser,
    AuthenticatedUserSetting,
)
from apps.movies.views.movies.views import Movies, MovieItem, RecommendMovies
from apps.movies.views.ratings.views import Ratings, RatingItem
from apps.comments.views import Comments, CommentItem
from apps.search import urls as search_patterns

auth_auth_patterns = [
    path("login/", Login.as_view()),
    path("login/refresh/", TokenRefreshView.as_view()),
    path("logout/", Logout.as_view()),
    path("register/", Register.as_view()),
]

auth_user_patterns = [
    path("", GetUserInfo.as_view()),
    path("ratings/", UserRatings.as_view()),
    path("comments/", UserComments.as_view()),
]

auth_users_patterns = [
    path("", Users.as_view()),
    path("<str:username>/", include(auth_user_patterns)),
]


auth_authenticated_user_patterns = [
    path("", AuthenticatedUser.as_view()),
    path("setting/", AuthenticatedUserSetting.as_view()),
    path("delete/", DeleteAuthenticatedUser.as_view()),
]

auth_patterns = [
    path("", include(auth_auth_patterns)),
    path("users/", include(auth_users_patterns)),
    path("user/", include(auth_authenticated_user_patterns)),
]

ratings_patterns = [
    path("", Ratings.as_view()),
    path("<int:rating_id>/", RatingItem.as_view()),
]

comments_patterns = [
    path("", Comments.as_view()),
    path("<int:comment_id>/", CommentItem.as_view()),
]

movies_patterns = [
    path("", Movies.as_view()),
    path("<slug:movie_slug>/", MovieItem.as_view()),
    path("recommend/", RecommendMovies.as_view()),
]

api_patterns = [
    path("auth/", include(auth_patterns)),
    path("movies/", include(movies_patterns)),
    path("comments/", include(comments_patterns)),
    path("ratings/", include(ratings_patterns)),
    path("search/", include(search_patterns)),
]

urlpatterns = [
    path("api/", include(api_patterns)),
    path("admin/", admin.site.urls),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
