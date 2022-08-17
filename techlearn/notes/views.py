from urllib import response
from django.http import Http404
from rest_framework import viewsets, views
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT
)

from .models import *
from .serializers import *


class TopicListView(ListAPIView):
    serializer_class = TopicSerializer
    queryset = Topic.objects.all()


class SubTopicViewSet(viewsets.ModelViewSet):
    serializer_class = SubTopicSerializer
    queryset = SubTopic.objects.all()


class AssignmentViewSet(viewsets.ModelViewSet):
    serializer_class = AssignmentSerializer
    queryset = Assignment.objects.all()

    def create(self, request):
        serializer = AssignmentSerializer(data=request.data)
        if serializer.is_valid():
            assignment = serializer.create(request)
            if assignment:
                return Response(status=HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST)


class GradedAssignmentListView(ListAPIView):
    serializer_class = GradedAssignmentSerializer

    def get_queryset(self):
        queryset = GradedAssignment.objects.all()
        username = self.request.query_params.get('username', None)
        if username is not None:
            queryset = queryset.filter(student__username=username)
        return queryset


class GradedAssignmentCreateView(CreateAPIView):
    serializer_class = GradedAssignmentSerializer
    queryset = GradedAssignment.objects.all()

    def post(self, request):
        print(request.data)
        serializer = GradedAssignmentSerializer(data=request.data)
        serializer.is_valid()
        graded_assignment = serializer.create(request)
        if graded_assignment:
            return Response(status=HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST)


class NotesListView(views.APIView):
    def get(self, request, format=None):
        notes = Note.objects.all()
        serializer= NoteSerializer(notes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = NoteSerializer(data=request.data)
        #print(request.data)
        if serializer.is_valid():
            note = serializer.create(request)
            if note:
                return Response(status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

class NotesDetailView(views.APIView):
    def get_object(self, pk):
        try:
            return Note.objects.get(pk=pk)
        except Note.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        note = self.get_object(pk)
        serializer = NoteSerializer(note)
        print(note)
        return Response(serializer.data)


class ConceptListView(views.APIView):
    """
    List all concepts, or create a new concept.
    """

    def get(self, request, format=None):
        concept = Concept.objects.all()
        serializer = ConceptSerializer(concept, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ConceptSerializer(data=request.data)
        
        if serializer.is_valid():
            concept = serializer.create(request)
            if concept:
                return Response(serializer.data ,status=HTTP_201_CREATED)
        return Response(serializer.errors ,status=HTTP_400_BAD_REQUEST)


class ConceptDetailView(views.APIView):
    def get_object(self, pk):
        try:
            return Concept.objects.get(pk=pk)
        except Concept.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        concept = self.get_object(pk)
        serializer = ConceptSerializer(concept)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        concept = self.get_object(pk)
        concept.delete()
        return Response(status=HTTP_204_NO_CONTENT)
