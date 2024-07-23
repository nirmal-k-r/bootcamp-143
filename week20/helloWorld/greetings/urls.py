from django.urls import path #path function
from . import views # . is shorthand for the current directory


urlpatterns=[
    path('',views.index,name='index'),
    path('welcome',views.welcome,name='welcome'),
    path('profile',views.profile,name='profile'),
    path('users',views.showAllUsers,name='showAllUsers')
]