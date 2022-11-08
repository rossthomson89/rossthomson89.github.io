import $ from 'jquery';

$(function() {
    //For new visitors check if they have dark mode enabled and set dark mode
    if (localStorage.toggled == undefined) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            $('body').addClass('dark');
            localStorage.toggled = "dark";
            $('#dark_mode').attr('checked', 'checked');
        }
    }

    //If the user has a dark mode preference then that's cool
    if (localStorage.toggled == 'dark') {
        $('body').addClass('dark');
        $('#dark_mode').attr('checked', 'checked');
    }

    //Toggle button for light/dark mode
    $(".burger").click(function(){
        $('body').toggleClass('no-scroll');
    });
});