from django.contrib import admin
from django.urls import path, include
import debug_toolbar

urlpatterns = [
    path('', include ('frontend.urls')),  #should always be first
    path('admin/', admin.site.urls),
    path('__debug__/', include(debug_toolbar.urls)),
]
