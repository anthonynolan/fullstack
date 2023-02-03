# from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, Http404
from .models import Goal
from django.template import loader
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import GoalSerializer

import pdb


def index(request):
    goals = Goal.objects.all()
    template = loader.get_template("goals/index.html")
    context = dict(goals=goals)
    return HttpResponse(template.render(context, request))


def view_goal(request, goal_id):
    try:
        goal = Goal.objects.filter(id=goal_id)[0]
    except:
        raise Http404("Goal does not exist")
    return render(request, "goals/goal_detail.html", context=dict(goal=goal))


class GoalView(viewsets.ModelViewSet):
    serializer_class = GoalSerializer
    queryset = Goal.objects.all()
