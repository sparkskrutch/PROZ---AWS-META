const inputEmail = document.getElementById('email')
const inputIdade = document.getElementById('idade')
const formulario = document.querySelector('form')

inputEmail.addEventListener('focus', () => {
    inputEmail.style.backgroundColor = 'lightgreen'
})

inputIdade.addEventListener('focus', () => {
    inputIdade.style.backgroundColor = 'lightgreen'
})

inputEmail.addEventListener('blur', (e) => {
    inputEmail.style.backgroundColor = ''
})

inputIdade.addEventListener('blur', (e) => {
    inputIdade.style.backgroundColor = ''
})

inputIdade.addEventListener('change', () => {
    alert('Certeza que quer alterar seus dados?')
})

formulario.addEventListener('submit', () => {
    alert('Dados enviados com sucesso!')
})