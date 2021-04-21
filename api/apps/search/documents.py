from elasticsearch import Elasticsearch
from elasticsearch_dsl import Search
from elasticsearch_dsl import analyzer
from elasticsearch_dsl.connections import connections
from django_elasticsearch_dsl import Document, fields, Index
from django_elasticsearch_dsl.registries import registry

from apps.common.model_loaders import get_movie_model, get_genre_model

# Create a connection to ElasticSearch
connections.create_connection()

client = Elasticsearch()
my_search = Search(using=client)


@registry.register_document
class MovieDocument(Document):
    class Index:
        name = "movies"
        settings = {"number_of_shards": 1, "number_of_replicas": 0}

    class Django:
        model = get_movie_model()
        fields = [
            "id",
            "title",
            "description",
            "year",
            "director",
            "poster",
            "imdb_rating",
            "rating_average",
            "rating_count",
            "slug",
        ]
