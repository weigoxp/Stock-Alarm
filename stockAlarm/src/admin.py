from django.contrib import admin

# Register your models here.
from stockAlarm.user.models import User, Watchlist, Stock

admin.site.register(User)
admin.site.register(Watchlist)
admin.site.register(Stock)
