from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken


from .models import Accountant, Teacher, CustomUser

class UserSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    isAccountant = serializers.SerializerMethodField(read_only=True)
    isTeacher = serializers.SerializerMethodField(read_only=True)
    isParent = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'username', 'first_name', 'middle_name', 'last_name', 'isAdmin', 'isTeacher', 'isStudent']

    def get_isAdmin(self, obj):
        return obj.is_staff
    
    def get_isTeacher(self, obj):
        return obj.is_teacher
    
    def get_isStudent(self, obj):
        return obj.is_student

    def get_username(self, obj):
        name = str(obj.first_name) + str(obj.last_name)
        if name == '':
            name = obj.email

        return name

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    user_type = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'first_name', 'middle_name', 'last_name', 'isAdmin', 'user_type', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
    
    def get_user_type(self, obj):
        serializer_data = UserSerializer(obj).data
        isStudent = serializer_data.get('isStudent')
        isTeacher = serializer_data.get('isTeacher')
        if isTeacher:
            return {'isTeacher': isTeacher}
        else:
            return {'isStudent': isStudent}

