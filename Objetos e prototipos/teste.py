import json
import pandas as pd
import os

objeto = 'G:/Meu Drive/Backup/Curso-Javascript/Objetos e prototipos/teste.json'
with open(objeto, 'r+') as j:
    dados = json.load(j)

dados[1]['idade'] = 25
# dados.append({
#     "nome": 'Marilany',
#     "sobrenome": "Ferreira",
#     "idade": "56",
#     "birthplace": "Caeté"
# })

for i in dados:
    if i['nome'] == 'José' and i['sobrenome'] == "Mares":
        data = i
print(data)

with open(objeto, 'w', encoding='utf-8') as j:
    json.dump(dados, j)

# print(dados)
