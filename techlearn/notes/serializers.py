from rest_framework import serializers

from users.models import CustomUser as User
from .models import (Assignment, Question, Choice, GradedAssignment, Concept, 
    Note, AdditionalExplanation, Topic, SubTopic)


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class QuestionSerializer(serializers.ModelSerializer):
    choices = StringSerializer(many=True)

    class Meta:
        model = Question
        fields = ('id', 'choices', 'question', 'order')


class AssignmentSerializer(serializers.ModelSerializer):
    questions = serializers.SerializerMethodField()
    teacher = StringSerializer(many=False)

    class Meta:
        model = Assignment
        fields = '__all__'

    def get_questions(self, obj):
        questions = QuestionSerializer(obj.questions.all(), many=True).data
        return questions

    def create(self, request):
        data = request.data

        assignment = Assignment()
        teacher = User.objects.get(username=data['teacher'])
        assignment.teacher = teacher
        assignment.title = data['title']
        assignment.save()

        order = 1
        for q in data['questions']:
            newQ = Question()
            newQ.question = q['title']
            newQ.order = order
            newQ.save()

            for c in q['choices']:
                newC = Choice()
                newC.title = c
                newC.save()
                newQ.choices.add(newC)

            newQ.answer = Choice.objects.get(title=q['answer'])
            newQ.assignment = assignment
            newQ.save()
            order += 1
        return assignment


class GradedAssignmentSerializer(serializers.ModelSerializer):
    student = StringSerializer(many=False)

    class Meta:
        model = GradedAssignment
        fields = '__all__'

    def create(self, request):
        data = request.data
        print(data)

        assignment = Assignment.objects.get(id=data['asntId'])
        student = User.objects.get(username=data['username'])

        graded_asnt = GradedAssignment()
        graded_asnt.assignment = assignment
        graded_asnt.student = student

        questions = [q for q in assignment.questions.all()]
        answers = [data['answers'][a] for a in data['answers']]

        answered_correct_count = 0
        for i in range(len(questions)):
            if questions[i].answer.title == answers[i]:
                answered_correct_count += 1
            i += 1

        grade = answered_correct_count / len(questions) * 100
        graded_asnt.grade = grade
        graded_asnt.save()
        return graded_asnt


class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = "__all__"

class SubTopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubTopic
        fields = "__all__"


class ConceptSerializer(serializers.ModelSerializer):
    topic = serializers.SerializerMethodField(read_only=True)
    sub_topic = serializers.SerializerMethodField(read_only=True)
    additional_explanations = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Concept
        fields = ('id', 'topic', 'sub_topic', 'explanation', 'additional_explanations')

    def get_topic(self, obj):
        topic = obj.topic
        serializer = SubTopicSerializer(topic, many=False)
        return serializer.data['topic']
    
    def get_sub_topic(self, obj):
        sub_topic = obj.sub_topic
        serializer = SubTopicSerializer(sub_topic, many=False)
        return serializer.data['name']
    
    def get_additional_explanations(self, obj):
        additional_explanations = obj.additional_explanations
        serializer = AdditionalExplanationsSerializer(additional_explanations, many=True)
        return serializer.data

    def create(self, request):
        data= request.data
        concept = Concept()
        concept.name = data['name']
        print(data['sub_topic'])
        topic = Note.objects.get(topic=data['topic'])
        sub_topic = SubTopic.objects.get(name=data['sub_topic'])
        concept.topic = topic
        concept.sub_topic = sub_topic
        concept.explanation = data['explanation']
        concept.save()
        

        for ae in data['additional_explanations']:
            newAdd = AdditionalExplanation()
            newAdd.name = ae['name']
            print(ae['name'])
            newAdd.explanation = ae['explanation']
            newAdd.examples = ae['examples']
            newAdd.save()
            concept.additional_explanations.add(newAdd)
        return concept


class AdditionalExplanationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdditionalExplanation
        fields = "__all__"

class NoteSerializer(serializers.ModelSerializer):
    notes = serializers.SerializerMethodField()
    class Meta:
        model = Note
        fields = ("topic", "notes")

    def get_notes(self, obj):
        notes = ConceptSerializer(obj.notes.all(), many=True).data
        return notes
    
    def create(self, request):
        data = request.data
        note = Note()
        
        for c in data['concepts']:
            newConcept = Concept()
            newConcept.name = c['name']
            print(c['sub_topic'])
            topic = Note.objects.get(topic=c['topic'])
            sub_topic = SubTopic.objects.get(name=c['sub_topic'])
            newConcept.topic = topic
            newConcept.sub_topic = sub_topic
            newConcept.explanation = c['explanation']
            newConcept.save()
            

            for ae in c['additional_explanations']:
                newAdd = AdditionalExplanation()
                newAdd.name = ae['name']
                #print(ae['name'])
                newAdd.explanation = ae['explanation']
                newAdd.examples = ae['examples']
                newAdd.save()
                newConcept.additional_explanations.add(newAdd)
        return note
        
