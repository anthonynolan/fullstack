from django.contrib import admin

from .models import Goal, Status


class GoalAdmin(admin.ModelAdmin):
    list_display = ("name", "status", "date_created")


# Register your models here.

# admin.site.register(Note)
admin.site.register(Goal, GoalAdmin)
admin.site.register(Status)
