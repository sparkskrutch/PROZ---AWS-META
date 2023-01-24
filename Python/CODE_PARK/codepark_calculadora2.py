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
        print("Essa opção não existe")


continuar = 1 
while (continuar):
    if (continuar == 1):
        c = int(input("Digite o número da operação: 1'Soma'/ 2 'Subtração'/ 3 'Multiplicação'/ 4 'Divisão' "))
        a = int(input("Digite um número: "))
        b = int(input("Digite outro número: "))
        calculadora(a, b, c)
        continuar = int(input(f"Continuar na calculadora? Digite '1 - Sim' ou '2 - Não'"))