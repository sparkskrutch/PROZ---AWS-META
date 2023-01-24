let number = document.querySelector('h1');
let button = document.querySelector('button');
let contagem = 0;

function adicionarUm(){
    contagem = contagem + 1;
    number.innerText = contagem;
}

adicionarUm();
button.addEventListener('click', adicionarUm);

//FUNÇÃO ANONIMA
// button.addEventListener('click', function(){
//     contagem = contagem + 1;
//     numero.innerText = contagem;
// });

//FUNÇÃO ARROW
// button.addEventListener('click', () => {
//     contagem = contagem + 1;
//     numero.innerText = contagem;
// })
