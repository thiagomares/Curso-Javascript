import pandas as pd
import json

df = pd.read_json('./teste1.json')
print(df)

df2 = pd.DataFrame({'nome': ["Marilany"], 'sobrenome': ['Ferreira'], 'idade': [56]})
df = pd.concat([df, df2], ignore_index=True, axis=0)

# Forma de modificar um valor em pandas
df.loc[df.nome == 'Thiago', 'sobrenome'] = 'Mares'
print(df)

# Exportando o nosso dataframe para json
arquivo_json = df.to_json(r'teste2.json',orient='records', compression='infer')
    
df1 = pd.read_json('./teste2.json')
print(df1)
