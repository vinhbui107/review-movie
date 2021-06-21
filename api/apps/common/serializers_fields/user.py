from rest_framework.fields import Field


class CommentsCountField(Field):
    def __init__(self, *args, **kwargs):
        kwargs["source"] = "*"
        kwargs["read_only"] = True
        super(CommentsCountField, self).__init__(**kwargs)

    def to_representation(self, user):
        return user.count_comments()


class RatingsCountField(Field):
    def __init__(self, *args, **kwargs):
        kwargs["source"] = "*"
        kwargs["read_only"] = True
        super(RatingsCountField, self).__init__(**kwargs)

    def to_representation(self, user):
        return user.count_ratings()


class RatingsAverageField(Field):
    def __init__(self, *args, **kwargs):
        kwargs["source"] = "*"
        kwargs["read_only"] = True
        super(RatingsAverageField, self).__init__(**kwargs)

    def to_representation(self, user):
        return user.average_ratings()


class IsSettingField(Field):
    def __init__(self, *args, **kwargs):
        kwargs["source"] = "*"
        kwargs["read_only"] = True
        super(IsSettingField, self).__init__(**kwargs)

    def to_representation(self, user):
        request = self.context.get("request")
        request_user = request.user

        if user.username is request_user.username:
            return True
        else:
            return False
