# Generated by Django 4.1 on 2022-08-08 19:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AdditionalExplanation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('explanation', models.TextField(blank=True, null=True)),
                ('examples', models.ManyToManyField(blank=True, to='notes.question')),
            ],
        ),
        migrations.RenameField(
            model_name='note',
            old_name='notes',
            new_name='concepts',
        ),
        migrations.DeleteModel(
            name='SpecificExplanations',
        ),
        migrations.AlterField(
            model_name='concept',
            name='list_of_explanations',
            field=models.ManyToManyField(blank=True, to='notes.additionalexplanation'),
        ),
    ]
