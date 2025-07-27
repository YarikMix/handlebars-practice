import "./build/precompiled.js"; // Подключение скомпилированных Handlebars шаблонов

import Home from "./src/pages/home/home.js";


const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

const home = new Home(root);
home.render()
