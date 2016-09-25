$(document).ready(function () {

    var $bgMenu = $(".btnMenu");
    var $btnClose = $(".btnClose");
    var $overlay = $(".overlay");
    var $body = $("body");
    var $delayTime = 200;
    var $slidingTime = 500;

    function showMenu() {
        $overlay.delay($delayTime).slideDown($slidingTime);
        $body.addClass("noScroll");
    }

    function closeMenu() {
        $overlay.delay($delayTime).slideUp($slidingTime);
        $body.removeClass("noScroll");
    }

    jQuery(document).ready(function() {
        var offset = 250;
        var duration = 300;
        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.to-top').fadeIn(duration);
            } else {
                jQuery('.to-top').fadeOut(duration);
            }
        });
        jQuery('.to-top').click(function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
        })
    });

    $bgMenu.click(showMenu);
    $btnClose.click(closeMenu);
})