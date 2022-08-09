from django.urls import path
from notes.views import (
    AssignmentViewSet,NotesListView, ConceptListView, 
    ConceptDetailView, TopicListView, NotesDetailView
)


urlpatterns = [
    path('', NotesListView.as_view(), name="notes-list"),
    path('<int:pk>/', NotesDetailView.as_view(), name="notes-detail"),
    path('assignment/', AssignmentViewSet.as_view({'get': 'list'}), name="assignments"),
    path('topic/', TopicListView.as_view(), name="topics"),
    path('concepts/', ConceptListView.as_view(), name="concepts-list"),
    path('concepts/<int:pk>/', ConceptDetailView.as_view(), name="concept-detail"),
    
]
