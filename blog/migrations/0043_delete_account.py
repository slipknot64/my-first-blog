# Generated by Django 3.1.5 on 2021-03-07 20:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0042_account'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Account',
        ),
    ]
