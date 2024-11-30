document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    let slideIndex = 0;
    const slides = carousel.querySelectorAll('.carousel-slide');
    const slideCount = slides.length;
    let timerId = null;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slideCount;
        showSlide(slideIndex);
        // Остановите текущий таймер
        if (timerId) {
            clearInterval(timerId);
        }
        // Запустите новый таймер с обновленным интервалом
        timerId = setInterval(nextSlide, 3000); // Перек������ючать каждые 3 секунды
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slideCount) % slideCount; // Убедитесь, что индекс не становится отрицательным
        showSlide(slideIndex);
        // Остановите текущий таймер
        if (timerId) {
            clearInterval(timerId);
        }
        // Запустите новый таймер с обновленным интервалом
        timerId = setInterval(nextSlide, 3000); // Переключать каждые 3 секунды
    }

    // Устанавливаем начальное положение карусели
    showSlide(slideIndex);


    // Автоматическое переключение слайдов
    timerId = setInterval(nextSlide, 3000); // Переключать каждые 3 секунды

    // Обработка событий нажатия кнопок (если они есть)
     document.querySelector('#next-slide-button').addEventListener('click', nextSlide);
     document.querySelector('#prev-slide-button').addEventListener('click', prevSlide);
});
