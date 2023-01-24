def multiplicacao(num1):
    num1 = int
    num1 = num1 * 2
    print("O valor multiplicado por 2 é igual a", num1)
    if (num1 % 2 != 0):
        raise Exception("Você digitou um número impar.")
    elif (num1 == str):
        raise Exception("negativo")



try:
    num1 = int (input("Digite um número: "))
    multiplicacao(num1)
except Exception as err:
    print(err)