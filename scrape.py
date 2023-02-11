import requests
import os
from bs4 import BeautifulSoup

url = "https://swgoh.gg/"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

images = []
for img in soup.find_all("img"):
    src = img.attrs.get("src")
    if src.startswith("http"):
        images.append(src)

if not os.path.exists("images"):
    os.makedirs("images")

for i, image_url in enumerate(images):
    response = requests.get(image_url)
    filename = image_url.split("_")[-1]
    with open(f"images/{filename}", "wb") as f:
        f.write(response.content)
