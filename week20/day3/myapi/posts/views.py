from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
import json
from .models import Post
from .serialisers import PostSerializer



@csrf_exempt
def view_posts(request):
    if request.method == 'GET':
        data=Post.objects.all()
        serialiser=PostSerializer(data,many=True)
        return JsonResponse(serialiser.data,safe=False)

@csrf_exempt
def view_post_by_id(request):
    if request.method == 'POST':
        data=json.loads(request.body) #parse the request body json
        id=data['id'] #extract the id from the json
        data=Post.objects.get(id=id) #get the post object with the id
        serialiser=PostSerializer(data) #serialise the post object
        return JsonResponse(serialiser.data,safe=False) #return the serialised data
    
@csrf_exempt
def create_post(request):
    if request.method == 'POST':
        data=json.loads(request.body) #parse the request body json
        serialiser=PostSerializer(data=data) #serialise the data
        if serialiser.is_valid(): #check if the serialised data is valid
            serialiser.save() #save the serialised data
            return JsonResponse(serialiser.data,status=201) #return the serialised data with status code 201
        return JsonResponse(serialiser.errors,status=400) #return the errors with status code 400
    
@csrf_exempt
def delete_post(request):
    if request.method == 'POST':
        data=json.loads(request.body)
        id=data['id']
        data=Post.objects.get(id=id).delete()

        return JsonResponse({"Status":"Done"},status=204)
    
@csrf_exempt
def update_post(request):
    if request.method == 'POST':
        data=json.loads(request.body) #parse the request body json
        # serialiser=PostSerializer(data=data) #serialise the data
        # if serialiser.is_valid():
        original=Post.objects.get(id=data['id'])
        if 'title' in data:
            original.title=data['title']
        if 'content' in data:
            original.content=data['content']
        original.save()

        return JsonResponse({'Status': 'Updated'},status=400) #return the errors with status code 400
    