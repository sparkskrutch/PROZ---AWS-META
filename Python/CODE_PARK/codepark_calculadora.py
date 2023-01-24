def calculadora(a, b, c):
    if (c == 1):
        soma = a + b
        print(soma)
    elif (c == 2):
        sub = a - b
        print(sub)
    elif (c == 3):
        multi = a * b
        print(multi)
    elif (c == 4):
        div = a / b
        print(div)
    else: 
        print(0)
    
a = int(input("Digite um número: "))
b = int(input("Digite outro número: "))
c = int(input("Digite o número da operação: 1'Soma'/ 2 'Subtração'/ 3 'Multiplicação'/ 4 'Divisão' "))
calculadora(a, b, c)