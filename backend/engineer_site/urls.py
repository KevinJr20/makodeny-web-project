from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from projects.views import ProjectList, ContactCreate
from blogs.views import BlogList, TrendList
from .views import redirect_to_frontend

urlpatterns = [
    path('', redirect_to_frontend, name='redirect_to_frontend'),
    path('admin/', admin.site.urls),
    path('api/projects/', ProjectList.as_view(), name='project-list'),
    path('api/blogs/', BlogList.as_view(), name='blog-list'),
    path('api/trends/', TrendList.as_view(), name='trend-list'),
    path('api/contact/', ContactCreate.as_view(), name='contact-create'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)