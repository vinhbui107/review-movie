from django.db import models
from django.conf import settings
from django.utils import timezone
from django.db.models import Q

from apps.accounts.models import User
from apps.movies.models import Movie


class Comment(models.Model):
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
        related_name="comments",
        null=False,
        blank=False,
    )
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "comment"
        ordering = ["-id"]

    def __str__(self):
        return self.content

    @classmethod
    def get_comment_with_id(cls, comment_id):
        return cls.objects.get(pk=comment_id)

    @classmethod
    def is_comment_not_exist(cls, comment_id):
        try:
            cls.objects.get(pk=comment_id)
            return False
        except cls.DoesNotExist:
            return True

    @classmethod
    def count_comment_for_movie_with_id(cls, movie_id):
        return cls.objects.filter(movie=movie_id).count()
