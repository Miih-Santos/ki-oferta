function renderNavbar() {
    const nav = document.querySelector("#navbar")
    nav.innerHTML = `
    <nav>
        <ul class="navbar-bottom">
            <li>
                <a href="#home" class="nav-icon">
                    <i data-lucide="house"></i> 
                    Home
                </a>
            </li>
            <li>
                <a href="#lista" class="nav-icon">
                    <i data-lucide="badge-dollar-sign"></i> 
                    Oferta
                </a>
            </li>
        </ul>
    </nav>
    `
}

export { renderNavbar }