import json

from rest_framework import serializers
from django_elasticsearch_dsl_drf.serializers import DocumentSerializer


class GenreSerializer(serializers.Serializer):
    """Helper serializer for the Genre field of the Movie document."""

    class Meta(object):
        """Meta options."""

        fields = "name"
        read_only_fields = ("name",)
