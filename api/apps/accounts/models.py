from django.db import models
from django.conf import settings
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
from django.db.models import Q, Avg

from imagekit.models import ProcessedImageField

from apps.accounts.helpers import upload_to_user_avatar_directory
from apps.common.model_loaders import (
    get_movie_model,
    get_rating_model,
    get_comment_model,
)
from apps.accounts.checkers import *


OCCUPATIONS = (
    (None, "Select your role"),
    ("Administrator", "Administrator"),
    ("Artist", "Artist"),
    ("College", "College"),
    ("Customer Service", "Customer Service"),
    ("Doctor", "Doctor"),
    ("Educator", "Educator"),
    ("Executive", "Executive"),
    ("Farmer", "Farmer"),
    ("Homemaker", "Homemaker"),
    ("Lawyer", "Lawyer"),
    ("Other", "Other"),
    ("Programmer", "Programmer"),
    ("Retired", "Retired"),
    ("Sales", "Sales"),
    ("Scientist", "Scientist"),
    ("Self-employed", "Self-employed"),
    ("Student", "Student"),
    ("Technician", "Technician"),
    ("Tradesman", "Tradesman"),
    ("Unemployed", "Unemployed"),
    ("Writer", "Writer"),
)

GENDER = (
    (None, "Select your gender"),
    ("M", "Male"),
    ("F", "Female"),
)


class User(AbstractUser):
    username = models.CharField(
        max_length=settings.USERNAME_MAX_LENGTH,
        blank=False,
        null=False,
        unique=True,
    )
    first_name = None
    last_name = None
    birthday = models.DateField(blank=False, null=True, default=None)
    gender = models.CharField(
        choices=GENDER,
        max_length=settings.GENDER_MAX_LENGTH,
        null=True,
        blank=True,
        default=None,
    )
    occupation = models.CharField(
        choices=OCCUPATIONS,
        max_length=settings.OCCUPATION_MAX_LENGTH,
        blank=True,
        null=True,
        default=None,
    )
    avatar = models.ImageField(
        upload_to=upload_to_user_avatar_directory,
        blank=True,
        null=True,
        default=None,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "user"

    def __str__(self):
        return self.username

    @classmethod
    def is_username_taken(cls, username):
        users = cls.objects.filter(username=username)
        if not users.exists():
            return False
        return True

    @classmethod
    def is_email_taken(cls, email):
        try:
            cls.objects.get(email=email)
            return True
        except User.DoesNotExist:
            return False

    @classmethod
    def get_user_profile_with_username(cls, username):
        try:
            return cls.objects.get(username=username)
        except User.DoesNotExist:
            return None

    @classmethod
    def user_with_username_exists(cls, username):
        return cls.objects.filter(username=username).exists()

    @classmethod
    def update_user_profile_with_username(
        cls,
        username,
        password,
        email,
        birthday,
        gender,
        occupation,
        avatar,
    ):
        user = cls.objects.get(username=username)

        user.username = username
        user.set_password(password)
        user.email = email
        user.birthday = birthday
        user.gender = gender
        user.occupation = occupation
        user.avatar = avatar

        user.save()
        return user

    @classmethod
    def get_user_with_username(cls, username):
        user_query = Q(username=username)
        user = cls.objects.get(user_query)
        return user

    def comment_movie_with_id(self, movie_id, user, content):
        Movie = get_movie_model()
        movie = Movie.objects.filter(pk=movie_id).get()
        return self.comment_movie(movie=movie, user=user, content=content)

    def comment_movie(self, movie, user, content):
        Comment = get_comment_model()
        comment = Comment.objects.create(
            movie=movie, user=user, content=content
        )
        comment.save()
        return comment

    def rating_movie_with_id(self, movie_id, user, rating):
        Movie = get_movie_model()
        movie = Movie.objects.filter(pk=movie_id).get()
        return self.rating_movie(movie=movie, user=user, rating=rating)

    def rating_movie(self, movie, user, rating):
        Rating = get_rating_model()
        obj, created = Rating.objects.update_or_create(
            movie=movie, user=user, defaults={"rating": rating}
        )
        return self.update_average_rating(movie=movie, rating=obj)

    def update_average_rating(self, movie, rating):
        Rating = get_rating_model()
        new_average_rating = Rating.objects.filter(movie_id=movie).aggregate(
            models.Avg("rating")
        )
        new_count_rating = Rating.objects.filter(movie_id=movie).count()
        # update movie
        movie.rating_average = round(new_average_rating["rating__avg"], 1)
        movie.rating_count = new_count_rating
        movie.save()
        return rating

    def get_rating_value_for_user(self, movie):
        return movie.get_rating_with_user(user=self)

    @classmethod
    def list_comment(cls, username):
        Comment = get_comment_model()
        user_query = cls.objects.get(username=username)
        comments = Comment.objects.filter(user=user_query)
        return comments

    def count_comments(self):
        Comment = get_comment_model()
        return Comment.objects.filter(user=self).count()

    def count_ratings(self):
        Rating = get_rating_model()
        return Rating.objects.filter(user=self).count()

    @classmethod
    def list_rating(cls, username):
        Rating = get_rating_model()
        user_query = cls.objects.get(username=username)
        ratings = Rating.objects.filter(user=user_query)
        return ratings

    def average_ratings(self):
        Rating = get_rating_model()
        average_ratings = Rating.objects.filter(user=self).aggregate(
            rating=Avg("rating")
        )

        if average_ratings["rating"] is not None:
            return round(average_ratings["rating"], 1)
        return None

    def update_avatar(self, avatar, save=True):
        if avatar is None:
            self.delete_profile_avatar(save=False)
        else:
            self.profile.avatar = avatar

        if save:
            self.profile.save()

        # def delete_avatar(self, save=True):
        #     delete_file_field(self.profile.avatar)
        #     self.profile.avatar = None
        #     self.profile.avatar.delete(save=save)

    def delete_with_password(self, password):
        check_password_matches(user=self, password=password)
        self.delete()
