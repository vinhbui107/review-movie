# Generated by Django 3.1.7 on 2021-03-23 20:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20210310_1817'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_deleted',
        ),
        migrations.RemoveField(
            model_name='user',
            name='is_email_verified',
        ),
        migrations.RemoveField(
            model_name='user',
            name='uuid',
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(blank=True, max_length=254, verbose_name='email address'),
        ),
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(blank=True, choices=[(None, 'Select your gender'), ('M', 'Male'), ('F', 'Female')], default=None, max_length=1, null=True),
        ),
    ]