# Generated by Django 3.1.5 on 2021-02-24 22:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0026_auto_20210224_2208'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderitem',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='blog.customer'),
        ),
    ]
