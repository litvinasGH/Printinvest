let items = [];
    function loadXML(url) {
        return fetch(url)
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(data => {
                items = Array.from(data.querySelectorAll('item')).map(item => {
                    return {
                        name: item.querySelector('name').textContent,
                        img: item.querySelector('img').textContent,
                        about: item.querySelector('about').textContent,
                        type: item.querySelector('type').textContent,
                        maker: item.querySelector('maker').textContent,
                        speed: parseInt(item.querySelector('speed').textContent, 10)
                    };
                });
                return items;
            });
    }

    function addItemsToDOM(items, nameURL) {
        const itemDetailsContainer = document.querySelector('.info'); // Выберите контейнер для деталей товара
        items.forEach(item => {
            if (nameURL === item.name){
                console.log('Товар найден!');
                // Обновление содержимого контейнера деталей товара
                itemDetailsContainer.querySelector('.name').textContent = item.name;
                itemDetailsContainer.querySelector('.maker').textContent = item.maker;
                itemDetailsContainer.querySelector('.type').textContent = item.type;
                itemDetailsContainer.querySelector('.about').textContent = item.about;
                itemDetailsContainer.querySelector('.image').src = item.img;
                itemDetailsContainer.querySelector('.mail').href = `mailto:info@printinvest.by?subject=Покупка ${item.name}`;
                document.title = item.name;
            }
        });
    }


    document.addEventListener('DOMContentLoaded', function() {
        const params = new URLSearchParams(window.location.search);
        const nameURL = decodeURIComponent(params.get('name'));
        loadXML('/Printinvest/catalog/items/items.xml')
        .then(loadedItems => addItemsToDOM(loadedItems, nameURL)) // Исправленный вызов функции
        .catch(error => console.error('Ошибка при загрузке XML:', error));
    });

    
