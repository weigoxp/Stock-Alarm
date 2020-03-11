import requests

url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary"

querystring = {"region":"US","lang":"en"}

headers = {
    'x-rapidapi-host': "apidojo-yahoo-finance-v1.p.rapidapi.com",
    'x-rapidapi-key': "d720cffba4mshb373c712d83bb00p1d8f59jsn6e5704ee7048"
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
print(type(response))
