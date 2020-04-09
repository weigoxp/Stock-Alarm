from django.contrib import admin

# Register your models here.
from .models import Stock

# admin.site.register(User)
# admin.site.register(Watchlist)
admin.site.register(Stock)
