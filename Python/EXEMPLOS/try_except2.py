print("Insira um numero")
try:
    valor = int(input())
    valor = valor + 5
    print("O valor digitado + 5 e igual a ", valor)
except Exception as e:
    print(e)