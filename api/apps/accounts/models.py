from imagekit.models import ProcessedImageField

from django.db import models
from django.conf import settings
from django.utils import timezone
from django.contrib.auth.models import AbstractUser

from .helpers import upload_to_user_avatar_directory


class User(AbstractUser):
    OCCUPATIONS = (
        (None, "Select your role"),
        ("Student", "Student"),
        ("PhD Student", "PhD Student"),
        ("Assistant", "Assistant"),
        ("Researcher", "Researcher"),
        ("Assistant Professor", "Assistant Professor"),
        ("Associate Professor", "Associate Professor"),
        ("Professor", "Professor"),
        ("Head of Department", "Head of Department"),
        ("Head of Faculty", "Head of Faculty"),
        ("Head of Laboratory", "Head of Laboratory"),
        ("Vice Rector", "Vice Rector"),
        ("Rector", "Rector"),
        ("Software Developer", "Software Developer"),
        ("Engineer", "Engineer"),
        ("Technician", "Technician"),
        ("Economist", "Economist"),
        ("Lawyer", "Lawyer"),
        ("Instructor", "Instructor"),
        ("Consultant", "Consultant"),
        ("Manager", "Manager"),
        ("Administrator", "Administrator"),
        ("Analyst", "Analyst"),
        ("Journalist", "Journalist"),
        ("Writer", "Writer"),
        ("Editor", "Editor"),
        ("Librarian", "Librarian"),
        ("Vice Director", "Vice Director"),
        ("Chief Executive Officer", "Chief Executive Officer"),
        ("Retired", "Retired"),
        ("Other", "Other"),
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
    def update_user_profile(
        cls, id, username, password, email, birthday, gender, occupation
    ):
        return
