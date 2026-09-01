function renderNavbar(rotas) {
    console.log(rotas)
    const nav = document.querySelector("#navbar")
    nav.innerHTML = `
    <nav>
        <ul class="navbar-bottom">
            
            ${
                rotas.map((menu) => `<li><a href="${menu.url}" class="nav-icon">
                <i data-lucide=${menu.icon}></i>
                ${menu.label}</a></li>`)
            }
            
        </ul>
        <i data-lucide="menu" class="menu"></i>  
    </nav>
    `
}

export { renderNavbar }