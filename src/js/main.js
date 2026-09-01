import { renderNavbar } from "./components/navbar/navbar.js";
import {rotas} from './components/rotas/rotas.js';
import { createIcons, icons } from 'lucide';



renderNavbar(rotas);
createIcons({icons});

const app = document.querySelector("#app");
app.innerHTML = "KiOferta";