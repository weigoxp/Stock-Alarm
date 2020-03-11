# When the databse is fucked up, and we decide to delete and re-build it, run below script
# after python manage.py shell

from user.models import User, Watchlist, Stock

u = User.objects.get(id=1) 

w = Watchlist.objects.get(id=1)
# w = Watchlist(user_id=u)

# you have to do this for w to get an id. 
# w.save(force_insert=True)

s_tsla = Stock(watchlist_id=w, stock_name='TSLA')
s_tsla.save(force_insert=True)
s_spy = Stock(watchlist_id=w, stock_name='SPY')
s_spy.save(force_insert=True)
s_appl = Stock(watchlist_id=w, stock_name='AAPL')
s_appl.save(force_insert=True)



Watchlist.objects.all()


