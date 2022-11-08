import $ from 'jquery';

$(function() {
    //Adding classes for the sticky nav
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 20) {
            $('.nav_container').addClass('fixed_nav');
            $('main').addClass('margin_fix');
            $('.mobile_nav input + label').addClass('burger_fix');
            $('.mobile_nav nav').addClass('mobile_nav_fix');
        }
        else {
            $('.nav_container').removeClass('fixed_nav');
            $('main').removeClass('margin_fix');
            $('.mobile_nav input + label').removeClass('burger_fix');
            $('.mobile_nav nav').removeClass('mobile_nav_fix');
        }
    });

    //toggle no-scroll class for mobile hamburger nav
    $(".mode_button").change(function() {
        if(this.checked) {
            if (localStorage.toggled != 'dark') {
                $('body').toggleClass('dark', true);
                localStorage.toggled = "dark";
            }
        } else {
            $('body').toggleClass('dark', false);
            localStorage.toggled = "";
        }
    });
});