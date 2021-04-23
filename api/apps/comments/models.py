from django.db import models
from django.conf import settings
from django.utils import timezone

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
    created_at = timezone.now()
    updated_at = timezone.now()

    class Meta:
        db_table = "comment"

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
