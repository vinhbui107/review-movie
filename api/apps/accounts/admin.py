from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea, CharField
from django import forms
from django.db import models
from .models import User


class UserAdminConfig(UserAdmin):
    model = User
    search_fields = (
        "email",
        "username",
    )
    list_filter = ("email", "username", "is_active", "is_staff")
    list_display = (
        "username",
        "email",
        "birthday",
        "gender",
        "occupation",
    )
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "email",
                    "username",
                    "birthday",
                    "gender",
                    "occupation",
                    "is_email_verified",
                    "is_deleted",
                    "avatar",
                )
            },
        ),
        ("Permissions", {"fields": ("is_staff", "is_active")}),
    )


admin.site.register(User, UserAdminConfig)
