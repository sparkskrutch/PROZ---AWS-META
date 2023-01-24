print("Olá, para saber qual categoria de CNH você precisa responda as perguntas abaixo.")
print()
qtde_rodas = int(input("Quantas rodas possui o veículo? "))
peso_veiculo = float(input("Qual o peso do veículo? "))
qtde_passageiros = int(input("Quantas pessoas o veículo transporta? "))

if (qtde_rodas <= 3):
    print("Categoria A")
elif qtde_rodas == 4 and peso_veiculo <= 3500:
    print("Categoria B")
elif qtde_rodas <= 4 and peso_veiculo <= 3501:
    print("Categoria C")
elif qtde_rodas >= 4 and qtde_passageiros >= 8:
    print("Categoria D")
elif peso_veiculo >= 6000 and qtde_rodas >= 4:
    print("Categoria E")
print ()
print("Obrigada!")