# ########################################## Rapagem de dados
# --> CONTEÚDO do dia - 34.3 - <--- / INICIO ----------------------------- //
# ########################################## Rapagem de dados

# Introdução
# Requisições web
# Alguns problemas
# Analisando respostas
# Recursos paginados
# Recursos obtidos à partir de outro recurso
# Limpeza de dados
# Banco de Dados
# Bônus

""" ---> OBJETIVO <---
- Realizar requisições web;
- Analisar conteúdos HTML afim de extrair dados;
- Aplicar técnicas de raspagem para evitar problemas como bloqueio de acesso;
- Armazenar os dados obtidos em um banco de dados.
"""


# ---> Conteúdos <---

"""  --------------------------------------------------------------------------- 
| -> Introdução <-                                                             |
---------------------------------------------------------------------------  """
# Raspagem de dados é uma técnica computacional para extrair dados provenientes de um serviço ou aplicação, estruturando-os em banco de dados, planilhas, ou outros formatos.

# Consiste em extrair dados de sites e transportá-los para um formato mais simples e maleável para que possam ser analisados e cruzados com mais facilidade.


"""  --------------------------------------------------------------------------- 
| -> Requisições web                                                           |
---------------------------------------------------------------------------  """
# - cria o ambiente virtuals
# └─# python3 -m venv .venv        
# starta
# └─# source .venv/bin/activate    
# instala o request
# └─# python3 -m pip install requests

# ./requisicoes-web.py

# import requests

# Requisição do tipo GET
response = requests.get("https://www.betrybe.com/")
print(response.status_code)  # código de status
print(response.headers["Content-Type"])  # conteúdo no formato html

# Conteúdo recebido da requisição
print(response.text)

# Bytes recebidos como resposta
print(response.content)

# Requisição do tipo post
response = requests.post("http://httpbin.org/post", data="some content")
print(response.text)

# Requisição enviando cabeçalho (header)
response = requests.get("http://httpbin.org/get", headers={"Accept": "application/json"})
print(response.text)

# Requisição a recurso binário
response = requests.get("http://httpbin.org/image/png")
print(response.content)

# Recurso JSON
response = requests.get("http://httpbin.org/get")
# Equivalente ao json.loads(response.content)
print(response.json())

# Podemos também pedir que a resposta lance uma exceção caso o status não seja OK
response = requests.get("http://httpbin.org/status/404")
response.raise_for_status()


"""  --------------------------------------------------------------------------- 
| -> Alguns problemas                                                          |
---------------------------------------------------------------------------  """
# ./crawler.py

""" Rate Limit """
# - limitação de quantas requisições podemos enviar em um curto período de tempo
# ./rate-limit.py

""" Timeout """
# - Garane que após um tempo, o recurso seja retornado
# ./timeout.py


"""  --------------------------------------------------------------------------- 
 -> Analisando respostas                                                       |
---------------------------------------------------------------------------  """
# instala o parsel(Para realizar a extração de dados de um conteúdo web )
# └─# python3 -m pip install parsel

# ./crawler-parsel.py

# ./exemplo_scrape.py

# 💡 Existem sites que podem ajudar com seletores css ou xpath .
# https://devhints.io/css
# https://devhints.io/xpath


"""  --------------------------------------------------------------------------- 
 -> Recursos paginados                                                         |
---------------------------------------------------------------------------  """
# Temos 20 livros, mas sabemos que este site possui 1000 livros. Que tal coletarmos todos?!

# recursos-paginados.py


"""  --------------------------------------------------------------------------- 
| -> Recursos obtidos à partir de outro recurso                                |
---------------------------------------------------------------------------  """
# - O primeiro passo é investigarmos como descobrir a URL que nos leva até a página de detalhes de um produto. 🔍

# Com esse seletor em mãos, precisamos recuperar o atributo href que contém o link para a página de detalhes do livro.

# ./teste.py


"""  --------------------------------------------------------------------------- 
| -> Limpeza de dados                                                          |
---------------------------------------------------------------------------  """
# caracteres estranho "Â£26.08"

# O padrão é conter um símbolo de libra, seguido por números, ponto para separar casas decimais e dois números como casas decimais. 
# Essa expressão regular pode ser feita da seguinte forma: £\d+\.\d{2} .

# getall pelo método re , ou o método get por re_first . 
# Ambos, além de recuperar valores, aplicarão a expressão regular sobre aquele valor.

# ./limpeza-de-dados.py

""" Fatiamento """
# -Chamamos esta operação de fatiamento e é muito utilizada para obtermos uma subsequência de uma sequência.

# Estruturas de dados do tipo sequência como listas, tuplas e strings podem ter seus elementos acessados através de um índice.
# Recupera o primeiro elemento
[1, 2, 3][0]  # Saída: 1

# Quando não incluso o valor inicial, iniciaremos do índice 0
# e do índice 2 em diante, os elementos não são incluídos
(1, 2, 3, 4)[:2]  # Saída: (1, 2)

# Quando omitimos o valor final
# o fatiamento ocorre até o fim da sequência
(1, 2, 3, 4)[1:]  # Saída: (2, 3, 4)

# Vá do índice 3 até o 7.
# O item no índice 7 não é incluído
"palavra"[3:7]  # Saída: "avra"

# Começando do elemento de índice 1, vá até o último,
# saltando de 2 em 2
[1, 2, 3, 4][1::2]  # Saída: [2, 4]

# ./fatiamento.py


"""  --------------------------------------------------------------------------- 
 -> Banco de Dados                                                             |
---------------------------------------------------------------------------  """
# sistema de gerenciamento do banco de dados "pymongo"

# instalar:
#  python3 -m pip install pymongo

# ./pymongo.py


"""  --------------------------------------------------------------------------- 
 -> Bônus                                                                      |
---------------------------------------------------------------------------  """
""" Scrapy """
# - 🕷 Uma excelente e poderosa ferramenta para raspagem de dados é a Scrapy . Ela possui, em sua implementação, todos mecanismos citados anteriormente e outros recursos adicionais.
# https://scrapy.org/


# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 34.3 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 34.3 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# ... Rapagem de dados

# - Curl
# - wget
# - TCPServer
# - UDPServer

# Execute os comando no Terminal

""" Curl > exibe uma paina a web """
# curl https://app.betrybe.com/course/live-lectures/sd-cohort-10-b

""" wget > possibilita baixar uma pagina da web"""
# wget https://app.betrybe.com/course/live-lectures/sd-cohort-10-b

""" TCPServer """
# ./tcp.py

# Terminal-01
# python3 tcp.py
# Terminal-02
# telnet 127.0.1 8080

""" UDPServer """
# ./udp.py
# Terminal-01

# Terminal-02
# nc -u 127.0.0.1 9090








# --------------------------------------------------------------------------- #
# - > AULA ao VIVO - 34.3 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 34.3 - <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Agora a prática

# Exercício 1: 

# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 34.3 - <--- / FIM --------------------------------- //
# ########################################## Rapagem de dados
# - Concluído ... ------------------------------------------------------------ #
