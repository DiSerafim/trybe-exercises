# ativa o terminal:
# python3

# import
>>> import requests

# faz a requisição a pagina web
>>> requests.get("https://www.facebook.com/stories/1371335472923399/UzpfSVNDOjY1MDM0MjEzMzA1MTkzMQ==/?bucket_count=9&source=story_tray")

# guarda a requisição em uma variavel
>>> requet = requests.get("https://www.facebook.com/stories/1371335472923399/UzpfSVNDOjY1MDM0MjEzMzA1MTkzMQ==/?bucket_count=9&source=story_tray")

# verifica a resposta da requisição
>>> requet.status_code

# headers da requisição
>>> requet.headers

# ler as informações do cabeçalho
>>> requet.headers['content-type']

# mostra o html da pagina
>>> requet.text

>>> requet.content

# faz requisição do metodo 'post'
>>> response = requests.post("http://httpbin.org/post", data="some content")

# status da requisição
>>> response.status_code

# verifica oque foi retornado
>>> response.text

# pega uma imagem
>>> res_image = requests.get("http://httpbin.org/image/png")

# verifica o status code
>>> res_image

# exibe o binario da imagem
>>> res_image.content
