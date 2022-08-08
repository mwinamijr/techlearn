from msilib.schema import Class
from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(GradeLevel)
admin.site.register(ClassLevel)
admin.site.register(Subject)

