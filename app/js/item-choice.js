var container = document.querySelector('.results');

items.forEach(function(item){
    var element = getFromTemplate(item);
    container.appendChild(element);
//    console.log(element)
    
});

function getFromTemplate(data) {
    var template = document.querySelector('#data-template');
    console.log(template)
    var element = template.content.children[0].cloneNode(true);
    return document.createElement('article');
}