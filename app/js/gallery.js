var $li = $('.image-list').find(' > li'),
    $links = $li.find(' > a'),
    $lightbox = $('.lightbox'),
    $overlay = $('.overlay'),
    $prev = $('.prev'),
    $next = $('.next'),
    liIndex,
    targetImage;

function replaceImg(src) {
    $lightbox.find('img').attr('src', src);
}

function getHref(index) {
    return $li.eq(index).find('> a').attr('href');
}

$links.click(function(e){
    e.preventDefault();
    liIndex = $(this).parent().index();
    targetImage = $(this).attr('href');
    replaceImg(targetImage);
    $lightbox.fadeIn();
});

$overlay.click(function(){
    $lightbox.fadeOut();
});

$next.click(function(){
    if((liIndex + 1) < $li.length) {
        targetImage = getHref(liIndex + 1);
        liIndex++;
    } else {
        targetImage = getHref(0);
        liIndex = 0;
    }
    replaceImg(targetImage);
}); 

$prev.click(function(){
    if(liIndex > 0) {
        targetImage = getHref(liIndex - 1);
        liIndex --;
    } else {
        targetImage = getHref($li.length - 1);
        liIndex = $li.length - 1;
    }
    replaceImg(targetImage);
});

// 1. в переменные сохраняем основные DOM элементы, которыми будем манипулировать
// 2. кликаем по ссылке на картинку - используем this именно для этого клика
// 3. нужно получить значение атрибута href по кликнутой ссылке -> .attr('href');
// 4. записываем значение атрибута href в служебную переменную
// 5. выбираем блок в котором показываем большую фотографию и в нем находим тег img
//    $lightbox.find('img')
// 6. в атрибут src записываем значение ссылки полученное ранее
//    .attr('src', targetImage);
// 7. используем методы fadeIn() / fadeOut() для показа и скрытия lightbox

// Переключение по кнопкам

// 1. используем событие клик по кнопкам $prev и $next.
// 2. нужно проверить условие, если мы находимся на последней картинке, то показываем первую,
//    а, если на второй картинке, то нужно показать следующую.
//    так как это условие, используем оператор if()else()
// 3. ранее мы сохранили в переменную liIndex индекс текущего элемента
//    liIndex = $(this).parent().index();
// 4. далее нужно получить реальный порядковый номер элемента
// 5. для этого добавляем к liIndex единицу -> liIndex + 1
// 6. зная порядковый номер, можем сравнить с общим колличеством элементов в массиве
// 7. и, если порядковый номер Меньше, чем число элементов в массиве, то мы находимся не на             последней картинке и можем показывать следующую
// 8. targetImage = $li.eq(liIndex + 1).find('> a').attr('href');
//    в targetImage записываем Текущий номер элемента и в нем находим ссылку и её атрибут href
// 9. liIndex++; увеличиваем на 1
// 10. далее, если условие не выполняется, то мы находимся на последней картинке и мы покажем           первую.
// 11. targetImage = $li.eq(0).find('> a').attr('href'); - находим href у первой картинки
// 12. liIndex = 0; -> таким образом показываем первую картинку
// 13. $lightbox.find('img').attr('src', targetImage); -> в этой ф. этот код подставляеи значение        targetImage в src для img

// ФУНКЦИИ
// строку -> $lightbox.find('img').attr('src', targetImage); заменяем на ф. replaceImg()
// в этой ф. мы находим тег img и в src записываем новое значение этого атрибута
// поэтому при написании этой ф. мы указываем параметр scr, которой позже принимает значение найденное ранее -> targetImage = $(this).attr('href'); и подставляет в нужный img

// строку -> $li.eq(liIndex + 1).find('> a').attr('href'); заменяем на ф. getHref();
// в эту ф. параметром передаем index, который затем берем и подставляем из условия
// getHref(liIndex + 1);