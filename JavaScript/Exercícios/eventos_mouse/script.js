let button = document.querySelector('button')
let span = document.querySelector('span')
let section = document.querySelector('section')

function mostrarSpan(){

    span.style.opacity = '100'
}

function ocultarSpan(){

    span.style.opacity = '0'
}

function fazerUmClick(){
    section.innerText = 'Fez um click simples!'
}

function fazerDoisClicks(){
    section.innerText = 'Fez um duplo click!'
}


button.addEventListener('mouseover', mostrarSpan)
button.addEventListener('mouseout', ocultarSpan)
// button.addEventListener('mouseleave', ocultarSpan)
button.addEventListener('click', fazerUmClick)
button.addEventListener('dblclick', fazerDoisClicks)