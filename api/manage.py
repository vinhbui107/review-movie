#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import ptvsd
from django.conf import settings


def main():
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

    if settings.DEBUG:
        if os.environ.get("RUN_MAIN") or os.environ.get("WERKZEUG_RUN_MAIN"):
            ptvsd.enable_attach(address=("0.0.0.0", 8888))
            print("Debug running with port 8888")

    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
