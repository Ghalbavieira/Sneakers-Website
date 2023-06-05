let btnMobile = document.getElementById('btn-nav');

function abrirMenu() {
    let nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', abrirMenu);