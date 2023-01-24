lista_produtos = ["Mesa", "Cadeira", "Monitor", "CPU", "Teclado", "Mouse", "Mousepad", "Monito 2"]

def encontrar_produto(array, elemento):
    teste = False
    while (teste == False):
        if (elemento != array):
            print("O item não foi encontrado.")
        else:
            teste = True
            print("O item foi encontrado:", elemento)


elemento = str(input("Qual item está procurando? "))

encontrar_produto(lista_produtos, elemento)