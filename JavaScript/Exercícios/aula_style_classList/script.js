const title = document.getElementsByClassName('title')
const error_text = document.getElementsByClassName('error-text')
const username_input = document.getElementById('login-usuario')
const password_input = document.getElementById('login-senha')
const success_message = document.getElementsByClassName('success-message')


title[0].style.color = 'blueviolet'

function validateInputPassword(){
    if(username_input.value != 'melissagouveia'){
        error_text[0].classList.add('visible')
    } else {
        error_text[0].classList.remove('visible')
    }
    if(password_input.value != '123456'){
        error_text[1].classList.add('visible')
    } else {
        error_text[0].classList.remove('visible')
    }
}

function showSuccessMessage(){
    success_message[0].classList.toggle('flex')
}

