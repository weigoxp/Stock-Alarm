from django.db import models


# Create your models here.

class User(models.Model):
    def __str__(self):
        return self.user_name
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    user_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)


class Watchlist(models.Model):
    def __str__(self):
        return str(self.id)
    # I think this attribute is note used...
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)


class Stock(models.Model):
    def __str__(self):
        return self.stock_name
    id = models.AutoField(primary_key=True)
    watchlist_id = models.ForeignKey(Watchlist, on_delete=models.CASCADE)
    stock_name = models.CharField(max_length=50)
    # True: notify user when market > price
    direction = models.BooleanField(default=None, blank=True, null=True)
    price = models.DecimalField(decimal_places=4, max_digits=15,default=None, blank=True, null=True)
