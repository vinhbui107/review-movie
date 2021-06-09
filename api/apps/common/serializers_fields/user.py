from rest_framework.fields import Field


class CommentListField(Field):
    def __init__(self, *args, **kwargs):
        kwargs["source"] = "*"
        kwargs["read_only"] = True
        super(CommentListField, self).__init__(**kwargs)

    def to_representation(self, user):
        comments = user.count_comments()
        return comments


class RatingListField(Field):
    def __init__(self, *args, **kwargs):
        kwargs["source"] = "*"
        kwargs["read_only"] = True
        super(RatingListField, self).__init__(**kwargs)

    def to_representation(self, user):
        ratings = user.count_comments()
        return ratings


class RatingCountField(Field):
    def __init__(self, *args, **kwargs):
        kwargs["source"] = "*"
        kwargs["read_only"] = True
        super(RatingCountField, self).__init__(**kwargs)

    def to_representation(self, user):
        comment_count = user.count_comments()
        return comment_count


class RatingAverageField(Field):
    def __init__(self, *args, **kwargs):
        kwargs["source"] = "*"
        kwargs["read_only"] = True
        super(RatingAverageField, self).__init__(**kwargs)

    def to_representation(self, user):
        comment_count = user.count_comments()
        return comment_count
