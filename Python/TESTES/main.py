def Numerovalido():
    cont = True
    while(cont == True ):
        try:
            numero = int(input("Digite um numero entre 1 e 100: "))
            if(numero < 1):
                print("") 
                print(f"Você digitou o número {numero} . Esse numero não é válido! Digite um número maior que 1 e menor que 100") 
                cont = True
            elif(numero > 100):
                print("")
                print(f"Você digitou o número {numero} . Esse número não é válido! Digite um número maior que 1 e menor que 100")
            elif(numero == 0):
                print("")
                print(f"Você digitou o número {numero} . Esse número não é válido! Digite um número maior que 1 e menor que 100")
            elif(numero % 2 == 0 ):
                print("")
                print(f"Você digitou o número {numero} . Esse número é divisivel por 2!")
            elif(numero % 3 == 0 ):
                print("")
                print(f"Você digitou o número {numero} . Esse número é Divisível por 3!") 
            else:
                print("")
                print(f"Você digitou {numero} , Esse é um número válido!")
                cont = False
        except:
            print("") 
            print("Número digitando não é válido") 


Numerovalido()

