import requests

url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes"

querystring = {"region":"US","lang":"en","symbols":"TSLA"}

headers = {
    'x-rapidapi-host': "apidojo-yahoo-finance-v1.p.rapidapi.com",
    'x-rapidapi-key': "62fe2fbf27msh97009b93ddff6e2p141f2fjsne078fd0e59ce"
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
