from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

from .models import Users

# Create your views here.
# def index(request):
#     return HttpResponse("Hello, world. You're at the greetings index.")

def index(request):
    # render(request,'greetings/home.html')
    template=loader.get_template('greetings/home.html')
    return HttpResponse(template.render({},request))

def welcome(request):
    return HttpResponse("Welcome to the greetings app!")

def profile(request):
    template=loader.get_template('greetings/profile.html')

    keyword=request.GET.get('username','nirmal')
    user=Users.objects.get(username=keyword)

    ctx={
        'username': user.username,
        'email': user.email
    }
    return HttpResponse(template.render(ctx,request))

def showAllUsers(request):
    template=loader.get_template('greetings/users.html')
    users=Users.objects.all()

    ctx={
        'users':users
    }
    return HttpResponse(template.render(ctx,request))

