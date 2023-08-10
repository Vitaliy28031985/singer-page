const buttonOpen = document.querySelector('.open');
const buttonClose = document.getElementById('close');
const menu = document.getElementById('menu');




menu.classList.add('toggle-menu')

const toggleMenu = () => {
    menu.classList.toggle('toggle-menu');
}

buttonOpen.addEventListener('click', toggleMenu);
buttonClose.addEventListener('click', toggleMenu);


