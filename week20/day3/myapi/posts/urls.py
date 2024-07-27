from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from . import views

urlpatterns = [
    path('view',views.view_posts,name='view_posts'),
    path('search',views.view_post_by_id,name='search posts'),
    path('create',views.create_post,name='create post'),
    path('delete',views.delete_post,name='delete post'),
    path('update',views.update_post,name='update post')
]