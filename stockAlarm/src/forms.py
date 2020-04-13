from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class saveStockPriceChangeForm(forms.Form):
    increase_to = forms.FloatField(required=False, widget=forms.TextInput(attrs={'placeholder': "i.e. 52.1 or 67.2"}))
    decrease_to = forms.FloatField(required=False, widget=forms.TextInput(attrs={'placeholder': "i.e. 52.1 or 67.2"}))
    increase_by = forms.FloatField(required=False, widget=forms.TextInput(attrs={'placeholder': "i.e. 3.2 or 4.1"}))
    decrease_by = forms.FloatField(required=False, widget=forms.TextInput(attrs={'placeholder': "i.e. -3.2 or -4.1"}))


class UserRegisterForm(UserCreationForm):
    # too complex to test. Commented for now.
    # email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']


class WatchlistForm(forms.Form):
    symbol = ""
    price = 0.0
    market = ""
    fifty_weeks_range = ""
    price_change = 0.0
