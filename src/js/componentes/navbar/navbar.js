function renderNavbar(rotas) {
    const nav = document.querySelector("#navbar");

    if (!nav) return;

    nav.innerHTML = `
        <nav>
            <ul class="navbar-bottom">
                ${rotas
                    .filter(menu => menu.label !== "")
                    .map(
                        menu => `
                            <li>
                                <a href="${menu.url}" class="nav-icon">
                                    <i data-lucide="${menu.icon}"></i>
                                    <span>${menu.label}</span>
                                </a>
                            </li>
                        `
                    )
                    .join("")}
            </ul>
            <i data-lucide="menu" class="menu-ham"></i>
        </nav>
    `;
}

export { renderNavbar };
