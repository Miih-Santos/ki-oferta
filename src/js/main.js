import { createIcons, icons } from "lucide";
import { renderNavbar } from "./componentes/navbar/navbar.js";
import { rotas } from "./componentes/rotas/rotas.js";

const app = document.querySelector("#app");

renderNavbar(rotas);

function renderApp() {
    const hash = window.location.hash || "#busca";
    const rota = rotas.find(tela => tela.url === hash);

    if (rota) {
        rota.pagina(app);
        createIcons({ icons });
    } else {
        app.innerHTML = "<p>Página não encontrada.</p>";
    }
}

window.addEventListener("hashchange", renderApp);

createIcons({ icons });
renderApp();
