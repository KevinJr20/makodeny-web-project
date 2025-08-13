from rest_framework import generics
from .models import Blog
from .serializers import BlogSerializer

class BlogList(generics.ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class TrendList(generics.ListAPIView):
    queryset = Blog.objects.filter(is_trend=True)
    serializer_class = BlogSerializer