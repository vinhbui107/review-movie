from django import forms
from django.contrib import admin
from django.db import models
from django.forms import CharField, Textarea, TextInput

from .models import Movie, Rating, Genre


@admin.register(Movie)
class MovieAdminConfig(admin.ModelAdmin):
    model = Movie
    search_fields = ("title",)
    list_filter = ("title", "year")
    list_display = ["title", "year", "imdb_rating", "director", "slug"]
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "title",
                    "year",
                    "description",
                    "imdb_rating",
                    "rating_average",
                    "rating_count",
                    "poster",
                    "slug",
                )
            },
        ),
    )


@admin.register(Rating)
class RatingAdminConfig(admin.ModelAdmin):
    model = Rating


@admin.register(Genre)
class GenreAdminConfig(admin.ModelAdmin):
    model = Genre
