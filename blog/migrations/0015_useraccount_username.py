# Generated by Django 3.1.5 on 2021-02-13 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0014_product_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='username',
            field=models.CharField(default='', max_length=200),
        ),
    ]