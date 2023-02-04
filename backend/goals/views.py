# Create your views here.
from .models import Goal
from rest_framework import viewsets
from .serializers import GoalSerializer


class GoalView(viewsets.ModelViewSet):
    serializer_class = GoalSerializer
    queryset = Goal.objects.all()
