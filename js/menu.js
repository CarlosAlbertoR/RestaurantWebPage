let menu_button = document.getElementById('menu_button');
let menu = document.getElementById('menu');

menu_button.addEventListener('click', function() {
    menu.classList.toggle('show');
})