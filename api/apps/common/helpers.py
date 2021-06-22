def delete_file_field(filefield):
    if not filefield:
        return

    try:
        file = filefield.file

    except FileNotFoundError:
        pass

    else:

        if isinstance(filefield.field, ProcessedImageField):
            # ImageKit has a bug where files are cached and not deleted right away
            # https://github.com/matthewwithanm/django-imagekit/issues/229#issuecomment-315690575
            cache = get_cache()
            cache.delete(cache.get(file))

        filefield.storage.delete(file.name)
