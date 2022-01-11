from pymongo import MongoClient

# Por padrão o host é localhost e porta 27017
# Estes valores podem ser modificados passando uma URI
# client = MongoClient("mongodb://localhost:27017/")
client = MongoClient()

# o banco de dados catalogue será criado se não existir
db = client.catalogue
# a coleção books será criada se não existir
students = db.books
# book representa um dado obtido na raspagem
book = {
    "title": "A Light in the Attic",
}

# Para adicionarmos documentos à nossa coleção utilizamos o método insert_one:
document_id = db.books.insert_one(book).inserted_id
print(document_id)

# Também podemos fazer inserção de múltiplos documentos de uma vez.
documents = [
    {
        "title": "A Light in the Attic",
    },
    {
        "title": "Tipping the Velvet",
    },
    {
        "title": "Soumission",
    },
]
db.books.insert_many(documents)

# Buscas podem ser feitas utilizando os métodos find ou find_one .
# busca um documento da coleção, sem filtros
print(db.books.find_one())
# busca utilizando filtros
for book in db.books.find({"title": {"$regex": "t"}}):
    print(book["title"])

# O nosso cliente é um gerenciador de contexto ( with )
with MongoClient() as client:
    db = client.database
    for book in db.books.find({"title": {"$regex": "t"}}):
        print(book["title"])

client.close()  # fecha a conexão com o banco de dados
