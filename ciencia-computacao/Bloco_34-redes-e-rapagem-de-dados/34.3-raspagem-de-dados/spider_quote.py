import requests
import parsel
# import Selector


def fetch_content(url):
    try:
        res = requests.get(url)
        res.raise_for_status()
    except requests.HTTPError:
        return ""
    else: return res.text

def extract_quotes(text):
    sel = parsel.Selector(text)
    quotes = []
    for quote in sel.css("div.quote"):
        text = quote.css("span.text::text").get()
        author = quote.css("small.author::text").get()
        tags = quote.css("a.tag::text").getall()
        quotes.append({
            "text": text,
            "author": author,
            "tags": tags,
        })
    return quotes

print(fetch_content("https://quotes.toscrape.com/"), "\n\n", "Conteúdo correto\n")
print("Conteúdo com error (404)\n", fetch_content("https://httpbin.org/status/404"))
page_content = fetch_content("https://quotes.toscrape.com/")
print(extract_quotes(page_content))