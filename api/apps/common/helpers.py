from rest_framework.serializers import Serializer


def validate_data(schema_cls: Serializer, data: dict) -> dict:
    """Validate data using Marshmallow schema
    Return validated data if success, raise ValidationError if failed
    """
    schema = schema_cls(data=data)
    schema.is_valid(raise_exception=True)
    return schema.validated_data
