import hashlib
from datetime import date

from django.db.models import Count
from django.utils import timezone
from rest_framework.decorators import api_view, throttle_classes
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle

from .models import VisitEvent, Visitor
from .serializers import VisitorCreateSerializer


class VisitorThrottle(AnonRateThrottle):
    scope = "visitor"


def _hash_ip(request):
    ip = request.META.get("REMOTE_ADDR", "")
    forwarded = request.META.get("HTTP_X_FORWARDED_FOR", "")
    if forwarded:
        ip = forwarded.split(",")[0].strip()
    return hashlib.sha256(ip.encode()).hexdigest() if ip else ""


def _stats():
    now = timezone.now()
    today = now.date()
    total_visitors = Visitor.objects.count()
    today_visitors = Visitor.objects.filter(last_visit__date=today).count()
    total_visits = VisitEvent.objects.count()
    return total_visitors, today_visitors, total_visits


@api_view(["POST"])
@throttle_classes([VisitorThrottle])
def register_visitor(request):
    serializer = VisitorCreateSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    vid = serializer.validated_data["visitor_id"]
    ip_hash = _hash_ip(request)
    ua = request.META.get("HTTP_USER_AGENT", "")
    path = request.data.get("path", "/")

    visitor, created = Visitor.objects.get_or_create(
        visitor_id=vid,
        defaults={"ip_hash": ip_hash, "user_agent": ua},
    )

    if not created:
        visitor.ip_hash = ip_hash
        visitor.user_agent = ua
        visitor.save(update_fields=["ip_hash", "user_agent", "last_visit"])

    VisitEvent.objects.create(visitor=visitor, path=path)

    total_visitors, today_visitors, total_visits = _stats()
    return Response({
        "is_new": created,
        "total_visitors": total_visitors,
        "today_visitors": today_visitors,
        "total_visits": total_visits,
    })


@api_view(["GET"])
@throttle_classes([AnonRateThrottle])
def visitors_stats(request):
    total_visitors, today_visitors, total_visits = _stats()
    return Response({
        "total_visitors": total_visitors,
        "today_visitors": today_visitors,
        "total_visits": total_visits,
    })
