$(document).ready(function () {

    $(document).on('click', function (e) {
        if ($(e.target).is('.login__block, .login__content, input,  button, h5, .login__item a') === false) {
            $('.login').removeClass('show');
        }
    })

    $('.login__item a').on('click', function (e) {
        e.preventDefault;
        $('.login__item').removeClass('active');
        $('.login-forms form').not(':first').hide();
        $(this).addClass('active');
        var tabId = $(this).attr('data-tab');
        if ($(this).hasClass('active')) {
            $('.login').addClass('show');
            $('.login__content').removeClass('display');
            $('#' + tabId).addClass('display');
        }
    })
    
    $('.login-forms').on('click', 'h5', function(){
        $('h5').next().animate({height: 'hide'}, 500).hide();
        $(this).next().animate({height: 'show'}, 500).show();
    })
});