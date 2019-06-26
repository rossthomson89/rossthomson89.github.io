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
        //
        // if (pageTop >= 636 ) {
        //     $(".header").addClass("header_fixed");
        //     $("#about").addClass("body_fix");
        // }


        //console.log(pageTop);

    });

    //Smooth page scroll for nav links
    $('a[href*="#"]').on('click', function(e) {
        //e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },500,'swing');
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 20) {
            $('.nav_container').addClass('fixed_nav');
            $('main').addClass('margin_fix');
        }
        else {
            $('.nav_container').removeClass('fixed_nav');
            $('main').removeClass('margin_fix');
        }
    });


});