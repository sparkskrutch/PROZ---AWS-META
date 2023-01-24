// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel)

// Validar valor do input
usernameInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper)
    inputsCorretos.username = false
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputsCorretos.username = true
  }
})

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.includes("@") && valor.includes(".com")){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false
  }
})

// ---------- VALIDAÇÃO SENHA ---------- //
let senhaInput = document.getElementById('senha')
let senhaLabel = document.querySelector('label[for="senha"]')
let senhaHelper = document.getElementById('senha-helper')

senhaInput.addEventListener('blur', (e) => {
  let valor = e.target.value

  if (valor.length) {
    estilizarInputCorreto(senhaInput, senhaHelper)
    inputsCorretos.senha = true
  } else {
    estilizarInputIncorreto(senhaInput, senhaHelper)
    senhaHelper.innerText = 'A senha é obrigatória'
    inputsCorretos.senha = false
  }
})

// ---------- VALIDAÇÃO CONFIRMAR SENHA ---------- //
let confirmaSenhaInput = document.getElementById('confirma-senha')
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]')
let confirmaSenhaHelper = document.getElementById('confirma-senha-helper')

confirmaSenhaInput.addEventListener('blur', (e) => {
  let valor = e.target.value

  if (valor = senhaInput.value) {
    estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper)
    inputsCorretos.confirmarSenha = true

  } else {
    estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper)
    confirmaSenhaHelper.innerText = 'A senha é obrigatória'
    inputsCorretos.confirmarSenha = false
  }
})

// ---------- HABILITAR ENVIO DE FORMULÁRIO ---------- //

const submitButton = document.getElementById('button')

const inputsCorretos = {
  username: false,
  email: false,
  senha: false,
  confirmarSenha: false
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  const values = Object.values(inputsCorretos)
  const anyFalse = values.filter((value) => value === false)
  if (!anyFalse.length) {
    alert('Formulário enviado com sucesso')
  } else {
    alert('Preencha todos os campos')
  }
})

//resetar formulário
