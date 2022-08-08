from django.db import models

# Create your models here.

class GradeLevel(models.Model):
    id = models.IntegerField(unique=True, primary_key=True, verbose_name="Grade Number")
    name = models.CharField(max_length=150, unique=True, verbose_name="Grade Name")

    class Meta:
        ordering = ('id',)

    def __str__(self):
        return self.name

    @property
    def grade(self):
        return self.id

class ClassLevel(models.Model):
    id = models.IntegerField(unique=True, primary_key=True, verbose_name="Grade Number")
    name = models.CharField(max_length=15, blank=True, null=True, verbose_name="Class Name")
    shortname = models.CharField(max_length=15, blank=True, null=True)

    class Meta:
        ordering = ('id',)

    def __str__(self):
        return self.name

    @property
    def grade(self):
        return self.id


class Subject(models.Model):
    code = models.IntegerField(primary_key=True, blank=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    short_name = models.CharField(max_length=5, blank=True, null=True)

    def __str__(self):
        return self.short_name
