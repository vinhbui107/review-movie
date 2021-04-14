# Use an official Python runtime as a parent image
FROM python:3

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Adding backend directory to make absolute filepaths consistent across services
WORKDIR /app/api

# Install Python dependencies
COPY requirements.txt /app/api
RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
