function promo(app){
    app.innerHTML = `
    <div>
        <h1>Página promoção</h1>
    </div>
    `
};

export default { 
    url:"#promo",
    label: "Promo",
    icon: "badge-percent", 
    pagina: promo
};