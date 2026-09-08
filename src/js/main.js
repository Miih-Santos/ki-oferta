import { renderNavbar } from "./components/navbar/navbar.js";
import {rotas} from './components/rotas/rotas.js';
import { createIcons, icons } from 'lucide';

renderNavbar(rotas);

const app = document.querySelector("#app");

function renderAPP(){
    const hash = window.location.hash || "#home"
    const rota = rotas.find(tela => tela.url === hash)
    if(rota){
        rota.pagina(app)
        createIcons({icons});
    }else{
        app.innerHTML = "Página não encontrada";
    }
};

window.addEventListener("hashchange", renderAPP);

renderAPP();