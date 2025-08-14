from rest_framework import generics
from .models import Project, Contact
from .serializers import ProjectSerializer, ContactSerializer
from django.core.mail import send_mail
from django.conf import settings

class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    
class ContactCreate(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    
    def perform_create(self, serializer):
        contact = serializer.save()
        subject = f'New Contact Form Submission from {contact.name}'
        message = f'Name: {contact.name}\nEmail: {contact.email}\nMessage: {contact.message}'
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [settings.ADMIN_EMAIL],
            fail_silently=False,
        )