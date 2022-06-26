import pymongo


client = pymongo.MongoClient("mongodb+srv://thiagomares:Ferreira13@cluster0.foagphb.mongodb.net/?retryWrites=true&w=majority")
db = client['dadosPessoais']
tabela = db['dadosBasicos']


dicionario = {
    "nome": "Thiago",
    "Idade": 27,
    "curso": "Ciência de Dados"
}
dicionario2 = {
    "nome": "Gustavo",
    "Idade": 25,
    "curso": "Fisioterapia"
}


# tabela.insert_one(dicionario2)
for i in tabela.find({'curso':'Fisioterapia'}):
    print(i)
