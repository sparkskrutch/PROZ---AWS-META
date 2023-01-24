// ---------- VALIDAÇÃO FORMULÁRIO ---------- //
const form = document.querySelectorAll('form')
let valor = ''


//-----------VALIDAÇÃO USERNAME--------//
const usernameInput = document.getElementById("username");
const usernameLabel = document.querySelector('label[for="username"]');
const usernameHelper = document.getElementById("username-helper");


function validarUsername(input, label){
    input.addEventListener('blur', (e) => {
        valor = e.target.value
        if (valor.length === 0){
            label.classList.add('required-popup')
            input.classList.add('error')    
        }
        else if (valor.length < 3 || valor.length > 10){
            label.classList.add('required-popup-username-invalido')
            input.classList.add('error') 
            input.classList.remove('correct')    
         
        } else {
            input.classList.add('correct')    
            input.classList.remove('error')          
            label.classList.remove('required-popup-username-invalido')
            label.classList.remove('required-popup')
        }
    })
}

//------------VALIDAÇÃO EMAIL---------//
const emailInput = document.getElementById("email");
const emailLabel = document.querySelector('label[for="email"]');
const validateEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')


function validarEmail(input, label){
    input.addEventListener('blur', (e) => {
        valor = e.target.value
        if (validateEmail.test(valor)){
            input.classList.add('correct')   
            label.classList.remove('required-popup-email-invalido') 
            label.classList.remove('required-popup')

        } 
        else if (valor.length = 0){
            label.classList.add('required-popup')
            label.classList.remove('required-popup-email-invalido')
            input.classList.remove('correct')   

        } else {
            label.classList.remove('required-popup')
            label.classList.add('required-popup-email-invalido')
            input.classList.remove('correct')    
            input.classList.add('error')
        }
    })
}

//------------VALIDAÇÃO IDADE---------//
const idadeInput = document.getElementById("idade");
const idadeLabel = document.querySelector('label[for="idade"]');

function validarIdade(input, label){
    input.addEventListener('blur', (e) => {
        valor = e.target.value
        if (valor >= 18){
            input.classList.add('correct')
            label.classList.remove('required-popup-idade-invalida')
            label.classList.remove('required-popup')
        } 
        else if (valor >= 1){
            label.classList.add('required-popup-idade-invalida')
            input.classList.add('error')
        } else {
            label.classList.add('required-popup')
            label.classList.remove('required-popup-idade-invalida')
            input.classList.add('error')
        }


    })
}

//------------VALIDAÇÃO SENHA---------//
const senhaInput = document.getElementById("senha");
const senhaLabel = document.querySelector('label[for="senha"]');
const validatePassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$')

function validarSenha(input, label){
    input.addEventListener('blur', (e) => {
        valor = e.target.value
        if (validatePassword.test(valor)){
            input.classList.add('correct')
            input.classList.remove('error')
            label.classList.remove('required-popup-senha-invalida')

        } else {
            input.classList.remove('correct')
            input.classList.add('error')
            label.classList.add('required-popup-senha-invalida')
        }
    })
}


//------------VALIDAÇÃO CONFIRMAÇÃO SENHA---------//
const confirmaSenhaInput = document.getElementById("confirma-senha");
const confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');

function validarConfirmaSenha(input,label){
    input.addEventListener('blur', (e) => {
        valor = e.target.value
        if (valor = senhaInput.value){
            input.classList.add('correct')
            input.classList.remove('error')
            label.classList.remove('required-popup-confirmar-senha')
        } else {
            input.classList.remove('correct')
            input.classList.add('error')
            label.classList.add('required-popup-confirmar-senha')
        }
    })
}


validarEmail(emailInput, emailLabel)
validarUsername(usernameInput, usernameLabel)
validarIdade(idadeInput, idadeLabel)
validarSenha(senhaInput, senhaLabel)
validarConfirmaSenha(confirmaSenhaInput, confirmaSenhaLabel)

