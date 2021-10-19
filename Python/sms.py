import requests

resp = requests.post('https://textbelt.com/text', {
  'phone': '+34651091387',
  'message': 'quw tal tio',
  'key': 'textbelt',
})
print(resp.json())