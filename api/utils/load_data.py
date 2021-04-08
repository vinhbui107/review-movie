import csv

from apps.common.bulk_create_manage import BulkCreateManager
from apps.accounts.models import User
from apps.movies.models import Movie, Rating, Genre


# load user table
print("Start import User table....")
with open("./data/users.csv", "rb") as csv_file:
    bulk_mgr = BulkCreateManager(chunk_size=20)
    for row in csv.reader(csv_file):
        bulk_mgr.add(User(attr1=row["attr1"], attr2=row["attr2"]))
    bulk_mgr.done()
print("Finished import User table.")


# load genre table
# with open("/path/to/file", "rb") as csv_file:
#     bulk_mgr = BulkCreateManager(chunk_size=20)
#     for row in csv.reader(csv_file):
#         bulk_mgr.add(MyModel(attr1=row["attr1"], attr2=row["attr2"]))
#     bulk_mgr.done()


# load movie table
# with open("/path/to/file", "rb") as csv_file:
#     bulk_mgr = BulkCreateManager(chunk_size=20)
#     for row in csv.reader(csv_file):
#         bulk_mgr.add(MyModel(attr1=row["attr1"], attr2=row["attr2"]))
#     bulk_mgr.done()


# load movie_genres table
# with open("/path/to/file", "rb") as csv_file:
#     bulk_mgr = BulkCreateManager(chunk_size=20)
#     for row in csv.reader(csv_file):
#         bulk_mgr.add(MyModel(attr1=row["attr1"], attr2=row["attr2"]))
#     bulk_mgr.done()


# load rating table
# with open("/path/to/file", "rb") as csv_file:
#     bulk_mgr = BulkCreateManager(chunk_size=20)
#     for row in csv.reader(csv_file):
#         bulk_mgr.add(MyModel(attr1=row["attr1"], attr2=row["attr2"]))
#     bulk_mgr.done()
