import produtos from "./produtos";

function buscar(app) {
    app.innerHTML = `
        <div class="container-buscar">
            <h2>Radar de Promoções</h2>
            <p class="subtitulo-buscar">O que você quer comprar mais barato?</p>

            <div class="grupo-input">
                <input
                    type="text"
                    id="input-busca"
                    placeholder="Produto ou marca"
                    aria-label="Campo de busca de produto"
                >
                <button id="btn-busca" type="button" aria-label="Buscar">
                    <i data-lucide="arrow-right"></i>
                </button>
            </div>

            <div class="categoria-busca">
                <p>Categoria</p>
                <ul class="categoria-lista">
                    <li class="categoria-item">
                    
                    Depósito
                    
                    </li>
                    <li class="categoria-item">
                       
                    Carnes
                    
                    </li>
                    <li class="categoria-item">
                       
                    Hortifrúti
                    
                    </li>
                    <li class="categoria-item">
                       
                    Bebidas
                    
                    </li>
                    <li class="categoria-item">
                       
                    Limpeza
                    
                    </li>
                    <li class="categoria-item">
                       
                    Higiene
                    
                    </li>
                </ul>
            </div>
        </div>
    `;



     capturarEvento(app);
};

function capturarEvento(app){
    document.querySelector(".categoria-lista").addEventListener("click",(event)=>{
        let categolriaSelecionada = event.target.textContent.toLowerCase().trim()
        produtos.pagina(app, categolriaSelecionada)
    })
    
    const categorias = document.querySelectorAll(".categoria-item a");
};



export default {
    url: "#buscar",
    label: "Buscar",
    icon: "search",
    pagina: buscar
};
