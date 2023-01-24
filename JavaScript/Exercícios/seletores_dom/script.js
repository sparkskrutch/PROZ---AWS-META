//Acessa um elemento no html pelo ID
const titulo = document.getElementById('titulo');

//Acessa vários elementos no html pela classe
const textos = document.getElementsByClassName('texto-simples');

// console.log(textos[0]);

//Retorna o primeiro elemento no documento que segue a especificação de um seletor CSS
const segundoTitulo = document.querySelector('div h2');

console.log(segundoTitulo);

//Retorna uma NodeList com todos os elementos no documento que seguem a especificação de um seletor CSS.
const textosPorClasse = document.querySelectorAll('.texto-simples');

console.log(textosPorClasse);
