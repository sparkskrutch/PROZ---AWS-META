from datetime import date

def calculadoraIdade():
    teste = False
    try:
        while (teste == False):
            nome = str(input("Nome completo: "))
            current_date = date.today()
            data_nascimento = int(input("Ano nascimento:"))
            data_atual = current_date.year
            idade = data_atual - data_nascimento
            if (data_nascimento < 1922):
                print("Insira um ano maior que 1922.")
            else:
                teste = True
                print("-"*40)
                print("Nome:", nome)
                print("Sua idade:", idade)
                print("-"*40)
                
    except:
        print("Você não digitou os dados corretamente.")

calculadoraIdade()