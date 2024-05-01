document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-button';
    menuButton.innerHTML = '&#9776;'; // Иконка меню
    document.body.appendChild(menuButton);

    var mobileMenu = document.querySelector('.navMob');

    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
        console.log('DOM fully loaded and parsed');
    });
});
