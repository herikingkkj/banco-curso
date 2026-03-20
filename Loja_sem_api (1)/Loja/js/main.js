const listaProdutos = document.getElementById("lista-produtos");
let produtos = [];

async function buscarProdutos() {
    const resposta = await fetch("assets/data/produtos.json");
    produtos = await resposta.json();
    mostrarProdutos(produtos);
}

function mostrarProdutos(lista) {
    listaProdutos.innerHTML = "";
    lista.forEach(produto => {
        const card = document.createElement("div");
        card.classList.add("col-md-3");
        card.classList.add("col-sm-6");
        card.classList.add("mb-6");
        card.innerHTML = `
        <div class="card">
                <img src="${produto.imagem}" alt="" style="width: 50%; max-width: 200%; height: 200%; max-height: 390px;">
                <h3>${produto.nome}</h3>
                <p>${(produto.descricao).substring(0,20) + "..."}</p>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button class="btn-detalhes rounded-pill btn btn-primary">Ver Detalhes</button>
                <button class="btn-comprar rounded-pill btn btn-success">Comprar</button>
                </div>
        `;
        const botaoDetalhes = card.querySelector(".btn-detalhes");
        botaoDetalhes.addEventListener("click", () => {
            window.location.href = `pages/detalhe.html?produto=${produto.slug}`;
        });
        listaProdutos.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    buscarProdutos();
});