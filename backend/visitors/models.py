import uuid
from django.db import models


class Visitor(models.Model):
    visitor_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_visit = models.DateTimeField(auto_now_add=True)
    last_visit = models.DateTimeField(auto_now=True)
    ip_hash = models.CharField(max_length=64, blank=True, db_index=True)
    user_agent = models.TextField(blank=True)

    class Meta:
        ordering = ["-first_visit"]


class VisitEvent(models.Model):
    visitor = models.ForeignKey(Visitor, on_delete=models.CASCADE, related_name="events")
    timestamp = models.DateTimeField(auto_now_add=True)
    path = models.CharField(max_length=500, blank=True, default="/")
