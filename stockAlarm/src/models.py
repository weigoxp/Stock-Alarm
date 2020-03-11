from django.db import models
import requests


# Create your models here.

def show_stock_info(stock_name: str) -> dict:
    """
    Taken as a stock name of a stock, apply the google finance API, return required information in a dictionary.
    :param stock_name: name of the stock
    :return: a dictionary having key:
    """
    url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes"
    try:
        querystring = {"region": "US", "lang": "en", "symbols": stock_name}
    except Exception:
        raise Exception("stock name doesn't exist")

    headers = {
        'x-rapidapi-host': "apidojo-yahoo-finance-v1.p.rapidapi.com",
        'x-rapidapi-key': "62fe2fbf27msh97009b93ddff6e2p141f2fjsne078fd0e59ce"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)

    raise NotImplementedError


def add_stock(uid: int, stock_name: str) -> None:
    """
    Taken as a uid and the stock_name the user wants to add, add the stock name into the database.
    :param uid:
    :param stock_name:
    :return: None
    """
    raise NotImplementedError


def delete_stock(uid: int, stock_name: str) -> None:
    """
    Taken as a uid and the stock_name the user wants to add, delete the stock name into the database.
    :param uid:
    :param stock_name:
    :return: None
    """
    raise NotImplementedError


def get_watchlist(uid: int) -> list:
    """
    Taken as a uid, return the list of watchlists of stock names.
    :param uid:
    :return: the list of watchlists of stock names.
    """
    raise NotImplementedError


def get_stock_names(watchlist_id: int) -> list:
    """
    Taken as a watchlist.id, return a list of stocks in the watchlist
    :param watchlist_id:
    :return:
    """
    raise NotImplementedError


def add_target_price(stock_name: str, target_price: str, direction: bool) -> None:
    """

    :param stock_name:
    :param target_price:
    :param direction: boolean if true then notify the user when price >= target_price, else notify when <= target_price
    :return: None
    """
    raise NotImplementedError
