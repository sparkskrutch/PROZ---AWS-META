print("Insira um numero ")
try:
    valor = int(input())
    valor = valor + 5
    print("O valor digitado + 5 e igual a ", valor)
except:
    print("nao foi digitado um numero")