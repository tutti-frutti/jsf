var container = document.querySelector('.results');

function getListData() {
    var xhr = new XMLHttpRequest();

    /**
     * @param {string} method
     * @param {string} URL
     * @param {boolean} async
     */

    xhr.open('GET', 'js/data/data-items.json');
    xhr.timeout = 10000;
    xhr.onload = function (evt) {
        var rawData = evt.target.response;
        var loadedData = JSON.parse(rawData);
        renderItems(loadedData);
    }
    xhr.send();
}

getListData();

function renderItems(loadedData) {
    var select = document.getElementById('u-select');
    select.addEventListener('change', function () {
        var options = select.value;
        var filtered = loadedData.filter(function (items, i, loadedData) {
            var name = loadedData[i].name;
            if (name == options) {
                return loadedData[i].name;
            }
        })
        container.innerHTML = '';
        filtered.forEach(function (item) {
            var element = getFromTemplate(item);
            container.appendChild(element);
        })
    });

};



function getFromTemplate(data) {
    var template = document.querySelector('#data-template');
    var element = template.content.children[0].cloneNode(true);

    element.querySelector('.item-name').textContent = data.name;
    element.querySelector('.sku').textContent = data.sku;
    element.querySelector('.height').textContent = data.Height;
    element.querySelector('.colors').textContent = data.colors;
    element.querySelector('.price').textContent = data.price;
    return element;
}