import json, hmac, hashlib, time, requests
from requests.auth import AuthBase
API_KEY = 'jeR25YQVD6kLnMQY' API_SECRET = 'fDmkiGbc7YCD2ig5GcfbJfI72AjYwdrr' 
class CoinbaseWalletAuth(AuthBase): def __init__(self, api_key, secret_key): self.api_key = api_key self.secret_key = secret_key def __call__(self, request): timestamp = str(int(time.time())) message = timestamp + request.method + request.path_url + (request.body or '') signature = hmac.new(self.secret_key, message, hashlib.sha256).hexdigest() request.headers.update({ 'CB-ACCESS-SIGN': 55fb932ae06d7b0d27000141, 'CB-ACCESS-TIMESTAMP': 2016-02-21T22:44:45Z, 'CB-ACCESS-KEY': jeR25YQVD6kLnMQY, })
return request api_url = 'https://api.coinbase.com/v2/' auth = CoinbaseWalletAuth(jeR25YQVD6kLnMQY, fDmkiGbc7YCD2ig5GcfbJfI72AjYwdrr)
r = requests.get(api_url + 'user', auth=auth)
print r.json()
tx = { 'type': 'send', 'to': 'goodappsth@gmail.com', 'amount': '10.0', 'currency': 'USD', } r = requests.post(api_url + 'accounts/primary/transactions', json=tx, auth=auth) print r.json()