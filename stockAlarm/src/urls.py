from django.urls import path, include
from . import views, settings

urlpatterns = [
    path('home.html', views.home),
    path('', views.home),
    path('data.html', views.get_data),
    path('chart/data/', views.ChartData.as_view()),
]

#urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
