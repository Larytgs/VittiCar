/*Parte do header, diminui o tamanho do menu no momento em que houver scroll*/
const menu = document.querySelector('#menu');
const img = document.querySelector('#logo');

function diminuirMenu() {
if (window.scrollY > 60) {
    menu.style.height = '110px';
    img.style.height = '90px'; img.style.width = '90px'; img.style.margin = '10px 100px'
} else {
    menu.style.height = '500px'; 
    img.style.height = '150px'; img.style.width = '150px'; img.style.margin = '20px'
}
}

window.addEventListener('scroll', diminuirMenu);