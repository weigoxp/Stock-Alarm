from django.contrib.auth.models import User
from django.db import models

# Create your models here.
from django.db import models


# Create your models here.

class Stock(models.Model):
    def __str__(self):
        return self.stock_name
    # note, though it is called id, it is actually an Object!!
    uid = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    stock_name = models.CharField(max_length=50)
    # True: notify user when market > price
    direction = models.BooleanField(default=None, blank=True, null=True)
    price = models.DecimalField(decimal_places=4, max_digits=15, default=None, blank=True, null=True)
