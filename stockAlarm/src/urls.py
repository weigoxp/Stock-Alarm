from django.urls import path, include
from . import views
from stockAlarm import settings
from django.conf.urls import url
from django.contrib.auth import views as auth_views
from django.conf.urls.static import static

from users import views as user_views

urlpatterns = [
    path('', views.home, name='homePage'),
    path('data.html', views.get_data),
    path('chart/data/', views.ChartData.as_view()),
    path('register/', user_views.register, name='register'),
    path('profile/', user_views.profile, name='profile'),
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='logout.html'), name='logout'),
]
