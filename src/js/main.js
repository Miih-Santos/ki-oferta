import { renderNavbar } from "./components/navbar/navbar.js";
import { createIcons, icons } from 'lucide';

renderNavbar();
createIcons({icons});

const app = document.querySelector("#app");
app.innerHTML = "olá mundo";