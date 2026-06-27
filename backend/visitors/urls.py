from django.urls import path

from . import views

urlpatterns = [
    path("visitor", views.register_visitor, name="register-visitor"),
    path("visitors", views.visitors_stats, name="visitors-stats"),
]
