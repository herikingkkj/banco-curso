const listaProdutos = document.getElementById("lista-produtos");
const tema = document.getElementById("trocaTema");
const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");
const lerPaginaBtn = document.getElementById("lerPagina");
const formpesquisa = document.getElementById("form-pesquisa");

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
                <button class="btn-detalhes rounded-pill btn btn-primary" tabindex="0">Ver Detalhes</button>
                <button class="btn-comprar rounded-pill btn btn-success" tabindex="0">Comprar</button>
                </div>
        `;
        const botaoDetalhes = card.querySelector(".btn-detalhes");
        botaoDetalhes.addEventListener("click", () => {
            window.location.href = `pages/detalhe.html?produto=${produto.slug}`;
        });
        listaProdutos.appendChild(card);
    });
}

function trocaTema() {
const body = document.body;
const temaAtual = body.getAttribute("data-bs-theme");
if (temaAtual === "dark") {
body.setAttribute("data-bs-theme", "light");
} else {
body.setAttribute("data-bs-theme", "dark");
 }
}

function aumentarTexto() {
    document.body.style.fontSize = "20px";
}
function diminuirTexto() {
    document.body.style.fontSize = "14px";
}

let lendo = false;
function lerPagina() {
if (lendo) {
    speechSynthesis.cancel();
    lendo = false;
} else {
    const texto = document.body.innerText;
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    fala.onend = () => {
        lendo = false;
    }; 
    speechSynthesis.speak(fala);
    lendo = true;
     }
}

tema.addEventListener("click", trocaTema);
tema.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        trocaTema;
    }
});
lerPaginaBtn.addEventListener("click", lerPagina);
lerPaginaBtn.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        lerPagina;
    }
});
aumentar.addEventListener("click",aumentarTexto);
aumentar.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        aumentarTexto();
    }
});
diminuir.addEventListener("click",diminuirTexto);
diminuir.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        diminuirTexto();
    }
});
document.addEventListener("DOMContentLoaded", () => {
    buscarProdutos();
});