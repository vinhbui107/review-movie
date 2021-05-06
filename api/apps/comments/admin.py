from django import forms
from django.contrib import admin
from django.db import models
from django.forms import CharField, Textarea, TextInput

from .models import Comment


@admin.register(Comment)
class CommentAdminConfig(admin.ModelAdmin):
    model = Comment
