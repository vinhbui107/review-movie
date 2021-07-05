from rest_framework.exceptions import NotFound

from apps.common.model_loaders import (
    get_comment_model,
)


def comment_id_exists(comment_id):
    Comment = get_comment_model()

    if not Comment.objects.filter(pk=comment_id).exists():
        raise NotFound(
            "The Comment does not exist.",
        )
