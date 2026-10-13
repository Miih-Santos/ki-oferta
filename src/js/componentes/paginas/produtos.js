import produtos from "../../dadosMockados/produtos";

function exibirProdutos(app, categoria=""){
    const filtraProdutos = categoria  ? produtos.filter(produto => produto.categoria === categoria) : produtos

    app.innerHTML = filtraProdutos.map(produto => `
        <div class="card">
            <img src= "${produto.img}" alt="${produto.nome}">
            <div class="card-body">
                <h5>${produto.nome}</h5>
                <p>${produto.preco.toFixed(2)}</p>
            </div>
        </div>
    `).join("")

    
};

export default {
    url: "#produtos",
    label: "",
    icons: "",
    pagina: exibirProdutos
}