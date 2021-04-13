import uuid
from imagekit.models import ProcessedImageField

from django.db import models
from django.conf import settings
from django.utils.text import slugify
from django.utils import timezone

from .helpers import (
    upload_to_actor_image_directory,
    upload_to_movie_image_directory,
)
from apps.accounts.models import User


class Genre(models.Model):
    name = models.CharField(
        max_length=settings.GENRE_NAME_MAX_LENGTH,
        blank=False,
        null=False,
        unique=True,
    )

    class Meta:
        db_table = "genre"

    def __str__(self):
        return self.name


class Movie(models.Model):
    title = models.CharField(
        max_length=settings.MOVIE_TITLE_MAX_LENGTH, blank=False, null=False
    )
    description = models.TextField(blank=True, null=True)
    year = models.CharField(
        max_length=settings.MOVIE_YEAR_MAX_LENGTH, blank=True, null=True
    )
    director = models.CharField(
        max_length=settings.MOVIE_DIRECTOR_MAX_LENGTH, blank=True, null=True
    )
    poster = models.TextField(blank=False, null=True)
    imdb_rating = models.FloatField(null=True, blank=True, default=None)
    rating_average = models.FloatField(null=True, blank=True, default=None)
    rating_count = models.IntegerField(null=True, blank=True, default=None)
    slug = models.SlugField(max_length=255, default=None, unique=True)
    genres = models.ManyToManyField(Genre, related_name="genres_of_movies")

    class Meta:
        db_table = "movie"

    def __str__(self):
        return self.title

    @classmethod
    def get_movie_with_id(cls, movie_id):
        return cls.objects.filter(pk=movie_id)

    @classmethod
    def get_top_rating_movies(cls):
        return cls.objects.order_by("-imdb_rating")

    @classmethod
    def get_trending_movies(cls):
        return cls.objects.order_by("-year")


class Rating(models.Model):
    movie = models.ForeignKey(
        Movie,
        on_delete=models.CASCADE,
        related_name="rates",
        null=False,
        blank=False,
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="rates",
        null=False,
        blank=False,
    )
    rating = models.FloatField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "rating"

    @classmethod
    def get_rating_with_movie_id(cls):
        return
