/*Parte do header, diminui o tamanho do menu no momento em que houver scroll*/

const menu = document.querySelector('#menu');
const img = document.querySelector('#logo');
const boton = document.querySelectorAll('.botoes');

const main = document.querySelector('#corpo');

function diminuirMenu() {
if (window.scrollY > 60) {
    menu.style.height = '110px'; menu.style.position = 'fixed'; menu.style.backgroundColor = 'white'; 
    img.style.height = '90px'; img.style.width = '90px'; img.style.margin = '10px 100px';
    main.style.margin = '5% 0%'
} else {
    menu.style.height = '700px'; menu.style.position = 'fixed'; //nao consigo deixar fixo o tamanho grande, logo quando entra no site
    img.style.height = '150px'; img.style.width = '150px'; img.style.margin = '20px';
}
}

window.addEventListener('scroll', diminuirMenu);