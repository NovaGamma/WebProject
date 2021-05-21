import requests
from bs4 import BeautifulSoup

url = "https://bindingofisaacrebirth.fandom.com/wiki/Items"

r = requests.get(url)
soup = BeautifulSoup(r.text,'html.parser')
temp = soup.find_all('tr',class_ = "row-collectible")

print(temp[0])
input()
for item in temp:
    img
print(temp)
