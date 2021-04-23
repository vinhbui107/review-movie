from django.db import models
from django.conf import settings
from django.utils import timezone
from django.contrib.auth.models import AbstractUser

from imagekit.models import ProcessedImageField

from apps.accounts.helpers import upload_to_user_avatar_directory
from apps.common.model_loaders import (
    get_movie_model,
    get_rating_model,
    get_comment_model,
)


class User(AbstractUser):
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
    avatar = ProcessedImageField(
        upload_to=upload_to_user_avatar_directory,
        blank=True,
        null=True,
        format="JPEG",
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
    def get_user_profile_with_id(cls, id):
        try:
            return cls.objects.get(pk=id)
        except User.DoesNotExist:
            return None

    @classmethod
    def update_user_profile_with_id(
        cls,
        user_id,
        username,
        password,
        email,
        birthday,
        gender,
        occupation,
    ):
        user = cls.objects.get(pk=user_id)

        user.username = username
        user.set_password(password)
        user.email = email
        user.birthday = birthday
        user.gender = gender
        user.occupation = occupation

        user.save()
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
        rating = Rating.objects.create(movie=movie, user=user, rating=rating)
        return rating
