import requests
import time


# À partir da décima requisição somos bloqueados de acessar o recurso
# Código de status 429: Too Many Requests
for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response.status_code)
    # Coloca uma pausa de 6 segundos a cada requisição
    time.sleep(6)

# após a décima requisição, o servidor começa a nos retornar respostas com o código de status 429 , "Too Many Requests".

