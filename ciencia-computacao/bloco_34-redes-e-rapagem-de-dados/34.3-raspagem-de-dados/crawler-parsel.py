from typing import Text
import requests
from parsel import Selector

response = requests.get("https://books.toscrape.com/")
selector = Selector(text=response.text)
# ex-1
# print(selector.css("img.thumbnail").getall())

# # ex-2 - foto pelo indice
# print(selector.css("img.thumbnail").getall()[0])

# # ex-3 - 1 foto
# print(selector.css("img.thumbnail").get())

# # ex-4 - tods fotos
# for thumbnail in selector.css("img.thumbnail").getall():
#     print(thumbnail)

# ex-5 - Links
# print(selector.css("div.image_container a").get())

# ex-5 - Links/href
# print(selector.css("div.image_container a::attr(href)").get())

# # ex-6 - Pega o H1
# thumb_url = selector.css("div.image_container a::attr(href)").get()
# thumbnail_request = requests.get("https://books.toscrape.com/" + thumb_url)
# thumbnail_selector = Selector(text=thumbnail_request.text)
# book_title = thumbnail_selector.css("div.product_main h1")
# print(book_title.get())

# ex-7 - Pega todos H1
thumb_url_selector = "div.image_container a::attr(href)"

for url in selector.css(thumb_url_selector).getall():
    thumbnail_request = requests.get("https://books.toscrape.com/" + url)
    thumbnail_selector = Selector(text=thumbnail_request.text)
    book_title = thumbnail_selector.css("div.product_main h1")
    print(book_title.get())
