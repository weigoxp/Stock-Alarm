from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import login, authenticate, user_logged_in
from django.shortcuts import render, redirect
from .models import Stock
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
    # I don't know why the request is never GET...
    else:
        print("there is a GET request")

    if request.user.is_authenticated:
        context = {
            'form': saveStockPriceChangeForm(),
            'stocks': Stock.objects.filter(uid=request.user)
        }
        print(context['stocks'])
    else:
        context = {
            'form': saveStockPriceChangeForm(),
        }
    # for e in Stock.objects.all():
    #     print(e.uid)
    return render(request, 'main.html', context)
