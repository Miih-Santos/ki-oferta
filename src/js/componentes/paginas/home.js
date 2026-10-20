function home(app) {
    app.innerHTML = `
    <div>
        <h1>Bem-vindo ao Ki-Oferta</h1>
        <h3>Sua próxima promoção está aqui</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnBvEPP9YujmQMHzT1fW_qJVw5Zer1YjFx8IkzNd5-g&s=10" alt="123"></img>
    </div>
    `
}

export default {
    url: "#home",
    label: "Home",
    icon: "house",
    pagina: home
};