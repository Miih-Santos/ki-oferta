function lista(app){
    app.innerHTML = `
    <div>
        <h1>Página Inicial</h1>
    </div>
    `
}

export default { 
    url:"#lista",
    label: "lista",
    icon: "badge-dollar-sign", 
    pagina: lista
}