let createLi = document.createElement('li')
let elementPai = document.querySelector('.lista-linguagens')
const postJs = document.createElement('div')
const postagens = document.querySelector('.postagens')

createLi.innerText = 'JavaScript'
createLi.id = 'ling-js'
elementPai.appendChild(createLi)
postJs.innerHTML = `
<div id="post-html">
<h2 class="post-titulo">JavaScript</h2>
<p class="post-texto">
    JavaScript é uma linguagem de programação
</p>
</div>`
postagens.appendChild(postJs)

console.log(createLi)
console.log(postJs)