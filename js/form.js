document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const nameURL = decodeURIComponent(params.get('name'));
    if (nameURL != "null"){
    document.getElementById('product').value = nameURL;
    }
    document.getElementById('serviceForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        const companyName = document.getElementById('companyName').value;
        const product = document.getElementById('product').value;
        const service = document.querySelector('input[name="service"]:checked').value;

        let serv = "";
        let servs = "";

        if (service === "maintenance") {
            serv = "прохождении техобслуживание";
            servs = "Техобслуживание";
        }
        else if (service === "purchase") {
            serv = "покупке";
            servs = "Покупка";
        }
        const sub = servs + ' ' + product;
        const body = `Юридическое лицо ${companyName}, нуждается в ${serv} ${product}`;
        const URL = `mailto:info@printinvest.by?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;

        window.location.href = URL;

        window.location.href = URL;
    })
})
