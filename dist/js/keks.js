// 1. переменные в глобальной области видимости
var controls = document.querySelectorAll('.toggle-controls li');
var photo = document.querySelector('.photo');

// 2. цикл для 2х действий
for (var i = 0; i < controls.length; i++) {
    controls[i].innerHTML = controls[i].dataset.filter;
    clickControl(controls[i]);
}

// 3. ф. для переключения фильтров
function toogleFilter(control) {
    for (var i = 0; i < controls.length; i++) {
        controls[i].classList.remove('active');
        photo.classList.remove(controls[i].dataset.filter);
    }

    control.classList.add('active');

    if (photo) {
        photo.classList.add(control.dataset.filter);
    }
}

// 4. ф. клика по управляющим элементам
function clickControl(control) {
    control.addEventListener('click', function () {
        toogleFilter(control);
    })
}

// 5. выбор фильтра по умолчанию
var baseFilter = document.querySelector('li.toaster');
toogleFilter(baseFilter);


// 1. переменные в глобальной области видимости
// выносим переключатели и блок внутри которого находится фотография

// 2. цикл для 2х действий: 
// a) записи названия фильтров в эл. li, которое берем из data-атрибута
// -i- чтобы с помощью JavaScript считать значение data-атрибутов, нужно использовать свойство dataset

// -i- в свойстве dataset HTML-элемента хранятся все значения его data-атрибутов. Обратиться к ним можно по названию data-атрибута, удалив из названия приставку data-

// b) clickControl(controls[i]);
// --- clickControl - Ф. котрая отслеживает клики по control
// --- эту Ф. передаём в цикл, который проходит по всем эл. controls и для кликнутого элемента осуществляет действия записанные в Ф. clickControl

// 3. ф. для переключения фильтров
// в цикле внутри ф. мы убираем класс active с элементов управления и блока photo
// var control = document.querySelector('li.' + filterName); - выбираем конкретный li и записываем в него название фильтра

// -i- метод querySelector не всегда может найти элемент и тогда переменная остаётся пустой. Чтобы проверить, что в переменной есть элемент и с ним можно работать, используется условный оператор if.

// 4. ф. клика по управляющим элементам
// -i- функция clickControl принимает найденный элемент и добавляет ему обработчик щелчков мыши, в котором вызывается функция переключения фильтра. Название фильтра для функции переключения берётся из data-атрибута самого элемента.