function buscar(app){
    app.innerHTML = `
        <div class="container-buscar">
            <h2>Radar de Promoções</h2>
            <p class="subtitulo-buscar">O que você quer comprar mais barato?</p>
            <div class="grupo-input">
                <input type="text" id="input-busca" placeholder="Produto ou marca" aria-Label="Campo de buscar produto">

                <button id="btn-busca">
                    <i data-lucide="arrow-right"></i>  
                </button>
            </div>

            <div class="categoria-busca">
                <p>Categoria</p>
                <ul class="categoria-lista">
                    <li>
                        Mercearia
                    </li>
                    <li>
                        Carnes
                    </li>
                    <li>
                        Hortifrúti                 
                    </li>
                    <li>
                        Bebidas
                    </li>
                    <li>
                        Limpeza
                    </li>
                    <li>
                        Higiene
                    </li>
                </ul>
            </div>
        </div>
    `

}

export default {
    url: "#buscar",
    label: "buscar",
    icon:"search",
    pagina: buscar
}