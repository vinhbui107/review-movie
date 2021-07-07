# Review Movie

> Cinema is the most beautiful fraud in the world.
> – Jean-Luc Godard

Review Movie inspired by TMDb with a movie dataset of over 27,000 movies, more than 20 genres.

## ![Screenshoot for Kamu's multiple libraries](https://github.com/vinhbui107/review-movie/blob/develop/screen_shots/home_page.png?raw=true)

## Features 

## Requirements

-   Python 3.8+ for API
-   Node.js 14+ for Frontend

## Installation / Getting started

Here is a quick step-by-step minimal setup, to get the app up and running in your local workstation:

### Platform independent

Move to API

```shell
cd api
```

Create Python virtual enviroment:

```shell
python3 -m venv venv
```

Activate virtual enviroment (this command can change based on OS):

```shell
source venv/bin/activate
```

Install backend dependencies using pip:

```shell
pip install -r requirements.txt
```

Create database tables:

```shell
python manage.py migrate
```

Create a super user:

```shell
python manage.py createsuperuser
```

Seed the database with initial dump data:

```shell
python3 manage.py runscript load_data
```

Index data for elasticsearch (Make sure you installed Elasticsearch in you machine)

```shell
python3 manage.py search_index --rebuild
```

---

Install dependencies using npm for Frontend:

```shell
cd frontend
npm install
```

Start your local server:

```shell
npm start
```

---

After finished config for API and Frontend.
Now just go to [http://localhost:3000](http://localhost:8000) in your browser :)

## Using Docker for local development

Remember to create a `.env` file with all the environment variables you need for spining up the environment.

For building the image:

```shell
  make docker-build
```

Create database tables:

```shell
  make docker-migrate
```

Create a super user:

```shell
  make docker-createsuperuser
```

You will use this super user to login as administrator in your local application.

Seed the database with initial dump data:

```shell
  make docker-loaddata
```

Index the data for Elasticsearch:

```shell
  make docker-indexdata
```

Now just go to [http://localhost:8000](http://localhost:8000) in your browser :)

Stop your environment:

```shell
  make docker-down
```

## Third-Party Packages for API

### Have fun :)

![Thanks!](http://gifgifmagazine.com/wp-content/uploads/2018/11/macka-daj-pet-jea.gif)
