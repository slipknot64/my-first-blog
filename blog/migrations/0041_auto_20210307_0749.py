# Generated by Django 3.1.5 on 2021-03-07 07:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0040_auto_20210307_0747'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='name',
        ),
        migrations.RemoveField(
            model_name='product',
            name='name',
        ),
    ]