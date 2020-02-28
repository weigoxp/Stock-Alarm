from django.urls import path, include
from . import views

urlpatterns = [
    path('home.html', views.home),
    path('data.html', views.get_data),
    path('chart/data/', views.ChartData.as_view()),
]
