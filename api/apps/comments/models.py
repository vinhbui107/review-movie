from django.db import models
from django.conf import settings

from apps.accounts.models import User
from apps.movies.models import Movie


class Review(models.Model):
    movie = models.ForeignKey(
        Movie,
        on_delete=models.CASCADE,
        related_name="comments",
        null=False,
        blank=False,
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="reviews",
        null=False,
        blank=False,
    )
    content = models.TextField()

    class Meta:
        db_table = "review"
