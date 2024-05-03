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


    var themeToggleButton = document.getElementById('theme-toggle-button');
     
    // Проверяем, установлена ли тема в localStorage
    var currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(currentTheme + '-theme');
    if(currentTheme === 'light'){
        themeToggleButton.textContent = '\u2600';
    }
    else if (currentTheme === 'dark'){
        themeToggleButton.textContent = '\u263E';
    }

    themeToggleButton.addEventListener('click', function() {
        // Переключаем тему
        if (document.body.classList.contains('light-theme')) {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            themeToggleButton.textContent = '\u263E';
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            themeToggleButton.textContent = '\u2600';
        }
    });
});

