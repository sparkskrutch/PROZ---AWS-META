def calculadora(n1,n2,op):
    if (op == 1):
        res = n1 + n2
    elif (op == 2):
        res = n1 - n2
    elif (op == 3):
        res = n1 * n2
    elif (op == 4) and (n2 != 0):
        res = n1 / n2
    else:
        res = "erro"
    return res    

res = calculadora(2,0,4)
if (res == "erro"):
    print("Ocorreu um erro")
else:
    print(res)   