docker-build:
	docker-compose up --build

docker-migrate:
	docker-compose run --rm api python manage.py migrate

docker-createsuperuser:
	docker-compose run --rm api python manage.py createsuperuser

docker-loaddata:
	docker-compose run --rm api python manage.py runscript load_data

docker-indexdata:
	docker-compose run --rm api python manage.py search_index --rebuild

docker-down:
	docker-compose down
