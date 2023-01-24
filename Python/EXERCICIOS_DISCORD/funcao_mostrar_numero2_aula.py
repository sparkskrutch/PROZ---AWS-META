def mostrar_numero():
    teste = False
    
    while (teste == False):
        try:
            num1 = int(input("Insira um número menor que 100: "))
            if (num1 > 100):
                print("Digite um número menor que 100.")
            elif (num1 == 0):
                print("'0' não é um número válido.")
            else:
                teste = True
                print("O número digitado foi:", num1)
        except:
                print("Digite caracteres númerico.")


mostrar_numero()