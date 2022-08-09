from django.db import models

from api.models import Subject
from api.models import ClassLevel
from users.models import CustomUser as User


class Topic(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    _class = models.ForeignKey(ClassLevel, on_delete=models.CASCADE, blank=True, null=True)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.name


class SubTopic(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.name


class Assignment(models.Model):
    title = models.CharField(max_length=50)
    teacher = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class GradedAssignment(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    assignment = models.ForeignKey(
        Assignment, on_delete=models.SET_NULL, blank=True, null=True)
    grade = models.FloatField()

    def __str__(self):
        return self.student.first_name


class Choice(models.Model):
    title = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.title


class Question(models.Model):
    question = models.CharField(max_length=200)
    choices = models.ManyToManyField(Choice)
    answer = models.ForeignKey(
        Choice, on_delete=models.CASCADE, related_name='answer', blank=True, null=True)
    assignment = models.ForeignKey(
        Assignment, on_delete=models.CASCADE, related_name='questions', blank=True, null=True)
    order = models.SmallIntegerField()

    def __str__(self):
        return self.question


class AdditionalExplanation(models.Model):
    """
    This shows additional explanations for a certain concept specifically 
    """
    name = models.CharField(max_length=255, blank=True, null=True)
    explanation = models.TextField(blank=True, null=True)
    examples = models.ManyToManyField(Question, blank=True)

    def __str__(self):
        return self.name

class Note(models.Model):
    """
    This contains full notes for a certain topic, it have all sub-topic concepts related to 
    the topic.
    """
    topic = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.topic}"


class Concept(models.Model):
    """
    This shows a concept which is related to a certain sub-topic with its full explanation.
    It can also have as many additional explanations which are related to that sub-topic
    """
    name = models.CharField(max_length=255, blank=True, null=True)
    topic = models.ForeignKey(Note, on_delete=models.SET_NULL, related_name='notes',blank=True, null=True)
    sub_topic = models.ForeignKey(SubTopic, on_delete=models.SET_NULL, blank=True, null=True)
    explanation = models.TextField(blank=True, null=True)
    image = models.ImageField(verbose_name=None, upload_to="concept images", blank=True, null=True)
    additional_explanations = models.ManyToManyField(AdditionalExplanation, blank=True)

    def __str__(self):
        return f"{self.sub_topic.topic} - {self.name}"
