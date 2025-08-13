from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from projects.views import ProjectList
from blogs.views import BlogList, TrendList

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/projects/', ProjectList.as_view(), name='project-list'),
    path('api/blogs/', BlogList.as_view(), name='blog-list'),
    path('api/trends/', TrendList.as_view(), name='trend-list'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)