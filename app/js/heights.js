window.onload = function() {
    function eHeight() {
        var items = document.querySelectorAll('.item');
        var tallest = 0;
        for(var i = 0; i < items.length; i++) {
            var elem = items[i];
            var elemHeight = elem.offsetHeight;
            tallest = (elemHeight > tallest ? elemHeight : tallest);
        }
        for( var i = 0; i < items.length; i++) {
            items[i].style.height = tallest + "px";
        }
    }
    eHeight();
}