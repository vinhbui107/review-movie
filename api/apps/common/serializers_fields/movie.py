from rest_framework.fields import Field


class CommentCountField(Field):
    def __init__(self, *args, **kwargs):
        kwargs["source"] = "*"
        kwargs["read_only"] = True
        super(CommentCountField, self).__init__(**kwargs)

    def to_representation(self, movie):
        comment_count = movie.count_comments()
        return comment_count


class RatingInfoField(Field):
    def __init__(self, *args, **kwargs):
        kwargs["source"] = "*"
        kwargs["read_only"] = True
        super(RatingInfoField, self).__init__(**kwargs)

    def to_representation(self, movie):
        comment_count = movie.get_rating_info()
        return comment_count


class RatingValueField(Field):
    def __init__(self, *args, **kwargs):
        kwargs["source"] = "*"
        kwargs["read_only"] = True
        super(RatingValueField, self).__init__(**kwargs)

    def to_representation(self, movie):
        request = self.context.get("request")
        request_user = request.user

        if request_user.is_anonymous:
            return None
        else:
            return request_user.get_rating_value_for_user(movie=movie)
