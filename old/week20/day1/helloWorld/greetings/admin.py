from django.contrib import admin
from .models import Users
from .models import Sales

# Register your models here.
admin.site.register(Users)
admin.site.register(Sales)
