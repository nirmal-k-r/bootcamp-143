from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from . import views 
from .views import PostView

urlpatterns = [
    path('', PostView.as_view(),name='view_posts'), #resouce for  all posts
    path('<int:id>/', PostView.as_view(), name='post-detail'),
    # path('search',views.view_post_by_id,name='search posts'),
    # # path('create',views.create_post,name='create post'),
    # path('delete',views.delete_post,name='delete post'),
    # path('update',views.update_post,name='update post')
]