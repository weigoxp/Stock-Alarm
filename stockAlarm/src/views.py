from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect

import json


# Create your views here.
from src.forms import saveStockPriceChangeForm


def home(request):
    return save_stock_price_change(request)
    # return render(request, 'main.html')


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


def save_stock_price_change(request):
    if request.method == 'POST':
        form = saveStockPriceChangeForm(request.POST)
        if form.is_valid():
            increase_to = form.cleaned_data['increase_to']
            decrease_to = form.cleaned_data['decrease_to']
            increase_by = form.cleaned_data['increase_by']
            decrease_by = form.cleaned_data['decrease_by']
        return render(request, 'main.html', {'form': saveStockPriceChangeForm()})
    # I don't know why the request is never GET...
    else:
        form = saveStockPriceChangeForm()
        return render(request, 'main.html', {'form': form})
