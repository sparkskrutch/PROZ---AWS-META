const quantidadeSubtotal = document.getElementById("quantidade-subtotal");
const valorTotal = document.getElementById("valor-total");
const adicionarProduto = document.getElementsByClassName('btn-adicionar-produto-01')
const subtrairProduto = document.getElementsByClassName('btn-subtrair-produto-01')
const quantidadeProduto = document.getElementById('quantidade-produto-01')
const quantidadeProduto2 = document.getElementById('quantidade-produto-02')
const error_text = document.getElementsByClassName('error-text')

let quantidadeTotal = Number(quantidadeProduto.value)

let subtotalInfo = {
  valor: 11.66
}


error_text[0].style.color = 'red'

function calculoValorTotal(quantidadeTotal) {
  valorTotal.innerText = (subtotalInfo.valor * Number(quantidadeTotal)).toFixed(2)
}

updateSubtotalProdutos()

function updateSubtotalProdutos() {
  quantidadeSubtotal.innerText = quantidadeTotal + " itens";
  calculoValorTotal(quantidadeTotal)
}

function addProdutos() {
  quantidadeProduto = quantidadeProduto.value + 1
  console.log(quantidadeProduto)
}

adicionarProduto.addEventListener('click', addProdutos())