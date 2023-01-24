estoque = ['porca', 'parafuso', 'arruela']
repeticao = ('sim', 'não')
teste = False

def incluir_item():
    item = str(input('Qual item deseja incluir? '))
    estoque.append(item)
    print(estoque)

def excluir_item():
    item = str(input('Qual item deseja excluir? '))
    estoque.remove(item)
    print(estoque)

def atualizar_estoque():
    item = str(input('Qual item deseja acrescentar no estoque? '))
    chave = int(input('Onde quer adicionar esse item? '))
    estoque.insert(chave, item)
    print(estoque)

print('-'*25)
print(' '*5, 'Estoque Loja')
print('-'*25)
print('')
print('O que deseja fazer? ')
print('')

while teste == False:
    print('1 - Incluir Item, 2 - Excluir item, 3 - Atualizar Estoque')
    funcao = int(input('Número da função: '))

    if (funcao == 1):
        incluir_item()
    elif (funcao == 2):
        excluir_item()
    elif (funcao == 3):
        atualizar_estoque()

    repeticao = str(input('Deseja fazer mais alguma coisa? '))

    if (repeticao == 'não'):
        teste = True

print('')
print('Estoque atualizado com sucesso!')