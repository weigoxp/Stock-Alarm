from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response

import json

# Create your views here.
def home(request):
    return render(request, 'main.html')

def get_data(request):
    # For a test purpose, I'm hard coding in the stored JSON file path.
    with open('../market_info_example.json') as f:
        data = json.load(f)
        return JsonResponse(data)

class ChartData(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request, format=None):
        # For a test purpose, I'm hard coding in the stored JSON file path.
        with open('../market_info_example.json') as f:
            data = json.load(f)
            return JsonResponse(data)
