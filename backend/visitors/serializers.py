from rest_framework import serializers

from .models import Visitor


class VisitorCreateSerializer(serializers.Serializer):
    visitor_id = serializers.UUIDField()


class VisitorResponseSerializer(serializers.Serializer):
    is_new = serializers.BooleanField()
    total_visitors = serializers.IntegerField()
    today_visitors = serializers.IntegerField()
    total_visits = serializers.IntegerField()
