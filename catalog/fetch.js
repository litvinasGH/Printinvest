// fetch.js

// Функция для загрузки XML и преобразования его в JSON
function loadXML(url) {
    return fetch(url)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            let items = Array.from(data.querySelectorAll('item')).map(item => {
                return {
                    name: item.querySelector('name').textContent,
                    img: item.querySelector('img').textContent,
                    about: item.querySelector('about').textContent,
                    type: item.querySelector('type').textContent
                };
            });
            return items;
        });
}

// Функция для добавления элементов в items-list
function addItemsToDOM(items) {
    const itemsList = document.querySelector('.items-list');
    // Очищаем список перед добавлением новых элементов
    itemsList.innerHTML = '';
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
            <img src="${item.img}">
            <h3>${item.name}</h3>
            <a>Перейти</a>
        `;
        itemsList.appendChild(itemDiv);
    });
}

// Функция для периодической проверки обновлений в items.xml
function checkForUpdates() {
    loadXML('/Printinvest/catalog/items/items.xml')
        .then(addItemsToDOM)
        .catch(error => console.error('Ошибка при загрузке XML:', error));
}

// Проверяем обновления при загрузке страницы и каждые 5 минут
checkForUpdates();
setInterval(checkForUpdates, 5 * 60 * 1000); // 5 минут
