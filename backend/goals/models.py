from django.db import models

# Create your models here.
from django.utils import timezone


class Status(models.Model):
    label = models.CharField(max_length=20)

    def __str__(self):
        return self.label


# class Note(models.Model):
#     text = models.CharField(max_length=2000)
#     date_entered = models.DateTimeField()

#     def __str__(self):
#         return f"{self.date_entered}, {self.text}"

from datetime import datetime


class Goal(models.Model):
    name = models.CharField(max_length=50)
    date_created = models.DateField(default=timezone.now)
    status = models.ForeignKey(Status, on_delete=models.CASCADE, default=1)
    # note = models.ForeignKey(Note, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"{self.name}"
