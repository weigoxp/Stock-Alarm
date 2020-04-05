from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect

import json


# Create your views here.
def home(request):
    return render(request, 'main.html')


def get_data(request):
    # For a test purpose, I'm hard coding in the stored JSON file path.
    with open('/Users/hlim1/CSC536/Stock-Alarm/market_info_example.json') as f:
        data = json.load(f)
        return JsonResponse(data)


class ChartData(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request, format=None):
        # For a test purpose, I'm hard coding in the stored JSON file path.
        with open('/Users/hlim1/CSC536/Stock-Alarm/market_info_example.json') as f:
            data = json.load(f)
            return JsonResponse(data)


def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})