$(document).ready(function () {
    $('#cities-search').keyup(function () {
        var newCity = $(this).val();
        $.ajax({
            type: 'GET',
            url: 'js/data/cities.json',
            success: function (result) {
                var result = $.parseJSON(result);
                console.log(result);
                var s = '';
                for (var i = 0; result.length; i++)
                    if (result[i].city == newCity) {
                        s += '<li>'+result[i].city+'</li>';

                    }
                $('#result').html(s);
            }
        })
    })
});