function checkWidth() {
    if ($(window).width() <= 950) {
        $('.steps').bxSlider({
            mode: 'fade',
            captions: true,
        });
    }
};

$(function () {
    checkWidth();
    $(window).on('resize', function () { checkWidth() });
});


$(document).ready(function () {
    $(".slide-toggle").click(
        function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active")
            } else {
                $(this).addClass("active")
            }

            const children = this.querySelector(".item-text")
            $(this.querySelector(".item-text")).slideToggle()
        });
});