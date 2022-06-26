from numpy import NaN
import pandas as pd
import numpy as np
import json

df = pd.read_json('./teste.json')
print(df)

df['sobrenome'] = df['sobrenome'].map({'Mares':'Ferreira'}, na_action=None)
print(df)

arquivo = df.to_json(orient = 'index')
print(arquivo)

caminho = "G:/Meu Drive/Backup/Curso-Javascript/Objetos e prototipos/teste1.json"
with open(caminho, 'w', encoding='utf-8') as c:
    json.dump(arquivo, c)
    
