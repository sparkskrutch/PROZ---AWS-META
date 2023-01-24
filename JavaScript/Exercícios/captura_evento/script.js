let elementClick = document.getElementById('elemento-clicado')
let buttonTime = document.getElementById('botao-tempo')
let time = document.getElementById('tempo')


buttonTime.addEventListener('click', function(evento){
    console.log(evento.timeStamp)
    time.innerText = evento.timeStamp
})

document.addEventListener('click', function(e){
    console.log(e.target)
    elementClick.innerText = e.target.ir
})