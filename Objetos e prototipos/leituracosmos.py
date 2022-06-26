import pandas as pd
import matplotlib.pyplot as plt
import pymongo

client = pymongo.MongoClient(
    "mongodb://dadospessoais:SkkJ6Z1VrjNwhjbWl0ezWcU6o6HtGPjQv6MrAfBabl5pkffptGorcLbV1Fjd3PofsaIuZZ7UFmFG6sNTIdeqxw==@dadospessoais.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@dadospessoais@")
database = client["DadosPessoais"]
dadosbasicos = database["DadosBasicos"]

df = pd.DataFrame(dadosbasicos.find())
print(df)

plt.bar(df['Nome'], df['idade'])
plt.show()
