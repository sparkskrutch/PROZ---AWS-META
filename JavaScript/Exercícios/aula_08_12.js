const username = 'melissa'
let comida_favorita = 'pizza'
let numeroDaSorte = 9

//Se quiser que dois testes sejam feitos pode colocar um 'if' no lugar de 'else if'.
if(numeroDaSorte == 9){
//Para acrescentar uma variável no 'console.log' junto com uma frase o sinal de grave '`' deve ser inserido no lugar de aspas.
console.log(`a comida ${comida_favorita} é muito gostosa e o número da sorte é: ${numeroDaSorte}`)
}else if(numeroDaSorte > 8){
    console.log(`não é a comida favorita: ${comida_favorita}`)
}