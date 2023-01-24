//Operador Lógico ou (||)
//Retornar True se um dos operandos forem True
let maiorDeIdade = false;
let possuirCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade || possuirCarteiraDeTrabalho;
console.log(podeAplicar);

// Operador Lógico (&&)
//Retornar True se os dois operandos forem True
let idadeDeMaior = false;
let possuiCarteiraDeTrabalho = true;
let deveAplicar = idadeDeMaior && possuiCarteiraDeTrabalho;
console.log(deveAplicar)

//Operador Lógico NOT (!)
//Retornar o operando False
let candidatoRecusado = !deveAplicar;
console.log(candidatoRecusado)
//Operador Lógico NOT (!)
let res = !(10==100);
console.log(res)