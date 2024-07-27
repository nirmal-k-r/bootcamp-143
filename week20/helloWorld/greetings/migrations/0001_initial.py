# Generated by Django 4.2.5 on 2024-07-23 16:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('username', models.CharField(max_length=100, primary_key=True, serialize=False, unique=True)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Sales',
            fields=[
                ('product_name', models.CharField(max_length=100, primary_key=True, serialize=False, unique=True)),
                ('quantity', models.IntegerField()),
                ('unit_price', models.FloatField()),
                ('total', models.FloatField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='greetings.users')),
            ],
        ),
    ]