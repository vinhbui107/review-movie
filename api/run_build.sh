# migrate
python3 manage.py makemigrations
python3 manage.py migrate

# delete old data
python3 manage.py flush

# import data
python3 manage.py runscript load_data

# index document
python3 manage.py search_index --rebuild
