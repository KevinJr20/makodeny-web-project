from django.db import models
from ckeditor.fields import RichTextField

class Blog(models.Model):
    title = models.CharField(max_length=200)
    content = RichTextField() # for blog content
    is_trend = models.BooleanField(default=False) # flag for the trends section
    tags = models.CharField(max_length=200, blank=True)
    published_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
    

    

