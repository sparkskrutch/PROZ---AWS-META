const linkPerfil = document.getElementById('link-perfil');
const navPerfil = document.getElementById('nav-perfil');
const linkDados = document.getElementById('link-perfil-dados')
const voltar = document.getElementById('voltar')
const numeroDaSorte = document.getElementById('numero-da-sorte')

document.addEventListener('keydown', (event)=> {

  if(event.code === 'Digit1'){
    if(navPerfil.style.display == 'block'){
      linkDados.click()
      numeroDaSorte.addEventListener('click', (e) => {
        e.preventDefault()
      })
    } else {
      navPerfil.style.display = 'block'
    }
  }
  if(event.code === 'Escape'){
    navPerfil.style.display = "none"
    
  }
  if(event.code === 'Backspace'){
    voltar.click()
  }
})
