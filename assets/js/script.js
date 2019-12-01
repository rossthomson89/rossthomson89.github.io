$(function() {

    //Fade in on scroll
    $(document).on("scroll", function () {
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var tags = $("section");

        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];

            if ($(tag).position().top < pageBottom) {
                $(tag).addClass("visible");
            } else {
                $(tag).removeClass("visible");
            }
        }
    }); 

    //Smooth page scroll for nav links
    $('a[href*="#"]').on('click', function(e) {
        //e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },500,'swing');
    });

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