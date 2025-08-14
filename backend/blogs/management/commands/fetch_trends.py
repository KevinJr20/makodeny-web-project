from django.core.management.base import BaseCommand
from blogs.models import Blog
import requests
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

class Command(BaseCommand):
    help = 'Fetch civil engineering trends from NewsAPI'

    def handle(self, *args, **kwargs):
        api_key = getattr(settings, 'NEWS_API_KEY', None)
        if not api_key:
            self.stdout.write(self.style.ERROR('NEWS_API_KEY not set in settings.py'))
            return

        url = 'https://newsapi.org/v2/everything'
        params = {
            'q': 'civil engineering OR ports OR infrastructure Kenya',
            'apiKey': api_key,
            'language': 'en',
            'sortBy': 'publishedAt',
            'pageSize': 5,  # Fetch 5 articles
        }

        try:
            response = requests.get(url, params=params)
            response.raise_for_status()
            articles = response.json().get('articles', [])

            for article in articles:
                title = article.get('title', 'No Title')
                content = article.get('description', '') or article.get('content', '')[:500]
                Blog.objects.get_or_create(
                    title=title,
                    defaults={
                        'content': content,
                        'is_trend': True,
                        'tags': 'news, civil engineering',
                        'published_at': article.get('publishedAt'),
                    }
                )
            self.stdout.write(self.style.SUCCESS(f'Successfully fetched {len(articles)} trends'))
        except Exception as e:
            logger.error(f'Error fetching trends: {e}')
            self.stdout.write(self.style.ERROR(f'Error: {e}'))