lista_compras = ["banana", "café", "pão", "açúcar", "arroz", "leite", "requeijão", "azeitona", "cuscuz", "tofú", "panetone", "feijão", "cerveja", "chocolate"]
doce = "café"

def achar_elemento(array, elemento):
    encontramos = False

    for i in range(len(array)):
        if elemento == array[i]:
            encontramos = True
            break

    if (encontramos == True):
        print("Encontramos o elemento", elemento, "no índice:", i)

    else:
        print("Não encontramos o elemento =(")

achar_elemento(lista_compras, doce)