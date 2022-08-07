from django.urls import path, include
from rest_framework.routers import DefaultRouter
from users.views import (
    MyTokenObtainPairView, registerUser, getUserProfile, 
	updateUserProfile, getUsers, getUserById, updateUser, deleteUser
	)

urlpatterns = [
	path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', registerUser, name='register'),
    path('profile/', getUserProfile, name="users-profile"),
    path('profile/update/', updateUserProfile, name="user-profile-update"),
    path('', getUsers, name="users"),
    path('<str:pk>/', getUserById, name='user'),
    path('update/<str:pk>/', updateUser, name='user-update'),
    path('delete/<str:pk>/', deleteUser, name='user-delete'),
]
