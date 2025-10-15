const menu = document.getElementById('menu');
const menuX = document.getElementById('menuX');
const menuPrincipal = document.querySelector('.menu-principal');

// Abre menu
menu.addEventListener('click', () => {
    menuPrincipal.classList.add('active');
    menu.style.display = 'none';
    menuX.style.display = 'block';
});

// Fecha menu
menuX.addEventListener('click', () => {
    menuPrincipal.classList.remove('active');
    menu.style.display = 'block';
    menuX.style.display = 'none';
});
