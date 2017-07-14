var container = document.querySelector('.results');

items.forEach(function(item){
    var element = getFromTemplate(item);
    container.appendChild(element);
    
});

function getFromTemplate(data) {
    var template = document.querySelector('#data-template');
    var element = template.content.children[0].cloneNode(true);
//    console.log(element)
    
    element.querySelector('.item-name').textContent = data.name;
    element.querySelector('.sku').textContent = data.sku;
    element.querySelector('.height').textContent = data.Height;
    element.querySelector('.colors').textContent = data.colors;
    element.querySelector('.price').textContent = data.price;
    
    return element;
}

document.querySelector('#u-select').onchange=changeEventHandler;
console.log(changeEventHandler)

function changeEventHandler (event) {
    if(!event.target.value) alert('Please Select One');
     else alert('You like ' + event.target.value + ' ice cream.'); 
}