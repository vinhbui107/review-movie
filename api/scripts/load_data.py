import os
import csv
import pandas as pd
from datetime import datetime
from django.utils.dateparse import parse_date
from apps.common.bulk_create_manage import BulkCreateManager
from apps.accounts.models import User
from apps.movies.models import Movie, Rating, Genre

workpath = os.path.dirname(os.path.abspath(__file__))


def load_data_user():
    print("Start import data into user table....")

    users_df = pd.read_csv(
        os.path.join(workpath, "data/users.csv"), low_memory=False
    )

    bulk_mgr = BulkCreateManager(chunk_size=10)
    for user in users_df.itertuples():
        bulk_mgr.add(
            User(
                username=user.username,
                password=user.password,
                email=user.email,
                birthday=datetime.strptime(user.birthday, "%Y/%m/%d").strftime(
                    "%Y-%m-%d"
                ),
                gender=user.gender,
                occupation=user.occupation,
            )
        )

    bulk_mgr.done()
    print("Finished import date user table.")


def load_data_genre():
    print("Start import data into genre table....")

    genres_df = pd.read_csv(
        os.path.join(workpath, "data/genres.csv"), low_memory=False
    )

    bulk_mgr = BulkCreateManager(chunk_size=10)
    for genre in genres_df.itertuples():
        bulk_mgr.add(
            Genre(
                name=genre.name,
            )
        )

    bulk_mgr.done()
    print("Finished import data genre table. \n")


def load_data_movie():
    print("Start import data into movie table....")

    movies_df = pd.read_csv(
        os.path.join(workpath, "data/movies.csv"), low_memory=False
    )

    bulk_mgr = BulkCreateManager(chunk_size=10)
    for movie in movies_df.itertuples():
        bulk_mgr.add(
            Movie(
                title=movie.title,
                description=movie.description,
                imdb_rating=movie.imdb_rating,
                year=movie.year,
                director=movie.director,
                slug=movie.slug,
                poster=movie.poster,
            )
        )

    bulk_mgr.done()
    print("Finished import data movie table. \n")


def load_data_movie_genres():
    print("Start import data into movie genre table....")

    movies_genres_df = pd.read_csv(
        os.path.join(workpath, "data/movies_genres.csv"), low_memory=False
    )

    bulk_mgr = BulkCreateManager(chunk_size=10)
    for row in movies_genres_df.itertuples():
        bulk_mgr.add(
            Movie.genres.through(movie_id=row.movie_id, genre_id=row.genre_id)
        )

    bulk_mgr.done()
    print("Finished import data movie genre table. \n")


def load_data_rating():
    print("Start import data into rating table....")

    ratings_df = pd.read_csv(
        os.path.join(workpath, "data/ratings.csv"), low_memory=False
    )

    bulk_mgr = BulkCreateManager(chunk_size=10)
    for row in ratings_df.itertuples():
        bulk_mgr.add(
            Rating(
                movie_id=row.movie_id, user_id=row.user_id, rating=row.rating
            )
        )

    bulk_mgr.done()
    print("Finished import data into rating table. \n")


def run():
    load_data_user()
    print("-------------------------")
    load_data_genre()
    print("-------------------------")
    load_data_movie()
    print("-------------------------")
    load_data_movie_genres()
    print("-------------------------")
    load_data_rating()
