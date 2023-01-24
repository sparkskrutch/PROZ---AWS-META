const formText = document.getElementById('text');
const maria_lima = document.getElementById('maria_lima');
const navElements = document.getElementsByClassName('elementos_nav');
const post_autor = document.getElementsByClassName('post-autor');

formText.innerText = ('Eu escolho o que escrever');
maria_lima.innerText = (' Melissa Gouveia')


console.log(formText.innerText)
console.log(maria_lima.innerText)
console.log(navElements[0].childNodes[1].innerText = 'Casa')
console.log(post_autor[0].innerHTML = `
<strong>Autor:</strong> Luis Reinaldo Gouveia`)

