runserver:
	@echo "🚀 Go to the moon"
	python manage.py runserver

runserver_public:
	@echo "🚀 Go to the moon"
	python manage.py runserver 0.0.0.0:8000

apply_migrations:
	@echo "👨‍🔧 Applying migrations"
	python3 manage.py makemigrations
	python3 manage.py migrate

	@echo "✅ All done"

reset_database:
	@echo "🗑 Clearing existing data"
	python manage.py flush --noinput

	@echo "👨‍🔧 Applying migrations"
	python manage.py makemigrations
	python manage.py migrate

	@echo "👩‍💻 Loading development data"
	python3 manage.py runscript load_data

	@echo "✅ All done"

reset_elastic:
	@echo "👩‍💻 Reindex data"
	python3 manage.py search_index --rebuild

	@echo "✅ All done"

reset_all_data:
	@echo "🗑 Clearing existing data"
	python manage.py flush --noinput

	@echo "👨‍🔧 Applying migrations"
	python manage.py makemigrations
	python manage.py migrate

	@echo "👩‍💻 Loading development data"
	python3 manage.py runscript load_data

	@echo "👩‍💻 Reindex data"
	python3 manage.py search_index --rebuild

	@echo "✅ All done"
