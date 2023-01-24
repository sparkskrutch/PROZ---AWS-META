def mostrar_numero():
    teste = False
    while (teste == False):
        try:
            num1 = int(input("Insira um número par menor que 100 e divisivel por 2 e 3: "))
            if (num1 > 100):
                print("Digite um número menor que 100.")
            elif (num1 == 0):
                print("'0' não é um número válido.")
            elif (num1 % 2 == 0):
                teste = True
                print("O número é divisivel por 2.")
            elif (num1 % 3 == 0):
                teste = True
                print("Esse número é divisivel por 3.")
            else:
                print("Digite um número divisivel por 2 e 3.")
        except:
                print("Digite um número.")


mostrar_numero()