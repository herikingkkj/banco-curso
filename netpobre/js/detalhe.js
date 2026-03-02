const API_KEY = "a3fda9b9d1d0aaee95df37313c16684e";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGEM_URL = "https://image.tmdb.org/t/p/w500";

const detalhesContainer = document.getElementById("detalhesContainer");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const type = params.get("type");

async function carregarDetalhes() {
    if (!id || !type) {
        detalhesContainer.innerHTML = "<p>Conteúdo inválido.</p>";
        return;
    }
    try {
        const response = await fetch(
            `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=pt-BR`
        );
        if (!response.ok) {
            throw new Error("Erro na API");
        }
        const data = await response.json();
        renderizarDetalhes(data);
    } catch (error) {
        detalhesContainer.innerHTML = "<p>Erro ao carregar detalhes.</p>";
        console.error("Erro:", error);
    }
}

function renderizarDetalhes(itens) {
    const imagem = itens.poster_path
        ? IMAGEM_URL + itens.poster_path
        : "";
    const titulo = itens.title || itens.name;
    const dataLancamento = itens.release_date || itens.first_air_date;
    document.title = titulo;
    detalhesContainer.innerHTML = `
        <div class="detalhes-card">
            <img src="${imagem}" alt="${titulo}">
            <div class="detalhes-info">
                <h2>${titulo}</h2>
                <p>Data: ${dataLancamento || "Data não disponível"}<br>
                Nota: ${itens.vote_average}<br>
                ${itens.tagline}<br>
                ${itens.overview}</p>
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", carregarDetalhes);

window.addEventListener("load", function () {
    const loader = this.document.getElementById("loader");
    if (loader) {
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
     }
});

async function requisicaoURL(url) {
    try {
        filmesGrid.classList.add("fade-out");
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Erro na requisição");
        }
        const data = await response.json();
        setTimeout(() => {
            renderizarMidia(data.results);
            filmesGrid.classList.remove("fade-out");
            filmesGrid.classList.add("fade-in");
            setTimeout(() => {
                filmesGrid.classList.remove("fade-in");
            }, 300);
        }, 200);
    } catch (error) {
        console.error("Erro:", error) ;
        filmesGrid.innerHTML = "<p> Erros ao carregar Filmes.</p>";
    }
}

window.addEventListener("load", function () {
    const loader = this.document.getElementById("loader");
    if (loader) {
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
     }
});