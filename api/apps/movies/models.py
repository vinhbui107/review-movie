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
    slug = models.SlugField(default=None, unique=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Genre, self).save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "genre"


class Actor(models.Model):
    name = models.CharField(
        max_length=settings.ACTOR_NAME_MAX_LENGTH,
        blank=False,
        null=False,
        unique=True,
    )
    avatar = ProcessedImageField(
        upload_to=upload_to_actor_image_directory,
        blank=False,
        null=True,
        format="JPEG",
        default=None,
    )

    def __str__(self):
        return self.name

    class Meta:
        db_table = "actor"


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
    poster = ProcessedImageField(
        upload_to=upload_to_movie_image_directory,
        blank=False,
        null=True,
        format="JPEG",
    )
    trailer = models.CharField(
        max_length=settings.MOVIE_TRAILER_MAX_LENGTH, blank=True, null=True
    )
    imdb_rating = models.FloatField(null=True, blank=True, default=None)
    rating = models.FloatField(null=True, blank=True, default=None)
    genres = models.ManyToManyField(Genre, related_name="genres_of_movies")
    actors = models.ManyToManyField(Actor, related_name="actors_of_movies")
    slug = models.SlugField(default=None, unique=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Movie, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        db_table = "movie"


class Rate(models.Model):
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
    rating = models.IntegerField(blank=False, null=False)
    created_at = timezone.now()

    class Meta:
        db_table = "rate"
