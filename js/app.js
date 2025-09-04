valorTotal = 0;

function adicionar(){

//Recuperar valores: nome do produto, preço e quantidade
let produto = document.getElementById('produto').value;
let quantidade = document.getElementById('quantidade').value;
let nomeProduto = produto.split('-')[0];
let precoProduto = produto.split('R$')[1];

//Calcular o preço do subproduto (multiplicar o preço unitário pela quantidade de itens do mesmo produto)
let precoSubproduto = quantidade * precoProduto;

//Adicionar itens ao carrinho
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoSubproduto},00</span>
        </section>`;

//Calcular o preço da compra total
valorTotal = valorTotal + precoSubproduto;
let mostrarValorTotal = document.getElementById('valor-total');
mostrarValorTotal.innerHTML =       `<p class="carrinho__total">
        Total: <span class="texto-azul" id="valor-total">R$${valorTotal},00</span>
      </p>`;
      quantidade = 0;
}

function limpar(){
  window.location.reload();
}