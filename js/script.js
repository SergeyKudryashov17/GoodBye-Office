$(document).ready(function () {
    widthTopBtn();
    scrollTopPage();
});

function widthTopBtn() {
    var widthBtn = ($(document).width() - $('.container').width()) / 2;
    $('.top-btn').width(widthBtn);
}

function scrollTopPage() {
    $('.top-btn').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
}