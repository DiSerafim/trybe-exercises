# Faça uma chamada GET, utilizando o CURL.
# └─# curl localhost:3000                   
# ou
# └─# curl -X GET localhost:3000                                                                                       7 ⨯


# Faça uma chamada POST, utilizando o CURL, passando um JSON no body da requisição.
"""
curl -X POST \                                                                                                   2 ⨯
    -H 'Content-Type: application/json' \
    -d '{ "foo": "bar" }' \
    localhost:3000
"""

# Faça uma chamada qualquer, utilizando o cURL, passando um header na requisição.
"""
url --request POST \                                                                                            7 ⨯
    --header 'Content-Type: application/json' \
    --header 'Authorization: Apikei EXAMPLE-TOKEN' \
    --data '{ "foo": "bar" }' \
    localhost:3000
"""
