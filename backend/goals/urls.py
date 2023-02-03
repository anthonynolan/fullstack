from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("<int:goal_id>/", views.view_goal, name="viewgoal"),
]
