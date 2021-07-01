# Generated by Django 3.1.7 on 2021-06-29 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0015_auto_20210622_2325'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='imdb_rating',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='poster',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='rating_average',
            field=models.FloatField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='movie',
            name='rating_count',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='movie',
            name='view_count',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]
