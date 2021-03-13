# Generated by Django 3.1.5 on 2021-03-07 19:54

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0041_auto_20210307_0749'),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('username', models.CharField(max_length=300, unique=True, validators=[django.core.validators.RegexValidator(code='invalid_username', message='Username must be alphanumeric or contain numbers', regex='^[a-zA-Z0-9.+-]*$')])),
                ('email', models.EmailField(max_length=255, unique=True, verbose_name='email address')),
                ('is_admin', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]