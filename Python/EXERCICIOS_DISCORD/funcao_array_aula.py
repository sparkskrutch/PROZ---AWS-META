lista_compras = ["Mesa", "Cadeira", "Monitor", "CPU", "Teclado", "Mouse", "Mousepad", "Monito 2"]
item = str

def encontrar_item(array, item):
    teste = False
    while(teste == False):
        item = str(input("Qual item deseja procurar? "))

        for i in range(len(array)):
            if item == array[i]:
                teste = True
                break

        if (teste == True):
            print("Encontramos o item", item, "no índice", i)
        else:
            print("Não encontramos esse item. =(")

encontrar_item(lista_compras, item)