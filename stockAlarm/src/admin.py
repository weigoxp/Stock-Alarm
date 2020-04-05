from django.contrib import admin

# Register your models here.
from .models import User, Watchlist, Stock

admin.site.register(User)
admin.site.register(Watchlist)
admin.site.register(Stock)
