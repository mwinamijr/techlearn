# Generated by Django 4.1 on 2022-08-08 13:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ClassLevel',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False, unique=True, verbose_name='Grade Number')),
                ('name', models.CharField(blank=True, max_length=15, null=True, verbose_name='Class Name')),
                ('shortname', models.CharField(blank=True, max_length=15, null=True)),
            ],
            options={
                'ordering': ('id',),
            },
        ),
        migrations.CreateModel(
            name='GradeLevel',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False, unique=True, verbose_name='Grade Number')),
                ('name', models.CharField(max_length=150, unique=True, verbose_name='Grade Name')),
            ],
            options={
                'ordering': ('id',),
            },
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('code', models.IntegerField(blank=True, primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=100, null=True)),
                ('short_name', models.CharField(blank=True, max_length=5, null=True)),
            ],
        ),
    ]
