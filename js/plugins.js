/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    $("body").niceScroll({cursorwidth:"13px"});
    $('carousel').carousel({
        interval: 5000
    });
    $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });
    var clolorLi = $(".color-option ul li"),
        scrollButton = $("#scroll-top");
    clolorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#E426D5").end()
        .eq(2).css("backgroundColor", "#009AFF").end()
        .eq(3).css("backgroundColor", "#afbd21");
    clolorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }

    });
    scrollButton.click(function () {
        $("html,body").animate({scrollTop: 0}, 600);

    });
});
$(window).on('load', function () {
  // Run code

    'use strict';
    $(".loading-overlay .spinner").fadeOut(1500,
        function () {
            $("body").css("overflow-x", "hidden");
            $(this).parent().fadeOut(1500,
                    function () {

                    $(this).remove();
                }
                );
        });
});
