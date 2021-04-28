from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import registry

from apps.common.model_loaders import get_movie_model, get_genre_model


@registry.register_document
class MovieDocument(Document):
    """Movie Elasticsearch document."""

    id = fields.IntegerField(attr="id")

    title = fields.TextField(
        fields={
            "raw": fields.TextField(analyzer="keyword"),
            "suggest": fields.CompletionField(),
        }
    )
    description = fields.TextField(
        fields={
            "raw": fields.TextField(analyzer="keyword"),
        }
    )
    director = fields.TextField(
        fields={
            "raw": fields.TextField(analyzer="keyword"),
        }
    )
    year = fields.IntegerField()
    poster = fields.TextField()
    imdb_rating = fields.FloatField()
    rating_average = fields.FloatField()
    rating_count = fields.IntegerField()
    slug = fields.TextField()
    genres = fields.TextField(
        attr="genres_indexing",
        fields={
            "raw": fields.TextField(analyzer="keyword", multi=True),
        },
        multi=True,
    )

    class Index:
        # Name of the Elasticsearch index
        name = "movie"
        # See Elasticsearch Indices API reference for available settings
        settings = {"number_of_shards": 1, "number_of_replicas": 0}

    class Django:
        Movie = get_movie_model()
        model = Movie

    class Meta:
        Movie = get_movie_model()
        model = Movie
