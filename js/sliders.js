var activeSlide = 1,                                                        // Номер активного слайда
    activeSlide2 = 1,
    activeSlide3 = 1,
    translateWidth = 0,                                                     // Расстояние прокрутки равное ширине блока
    slideCount = $('.news-text-slider__slidewrapper').children().length,    // Количество слайдов
    slideCount2 = $('.interview-slider__slidewrapper').children().length,
    navBtn = $('.news-text-slider__nav-btn'),                               // Набор элементов слайдера (слайдов)
    slideInterval = 5000;                                                   // Временной промежуток автопрокрутки

$(document).ready(function () {
    var switchInterval = setInterval(autoScrollSlide, slideInterval);
    // Остановка прокрутки при наведении мыши на слайдер
    $('.news-text-slider__viewport').hover(function(){
        clearInterval(switchInterval);
    },function() {
        switchInterval = setInterval(autoScrollSlide, slideInterval);
    });

    // Переход к нужному слайду по кнопкам навигации
    $('.news-text-slider__nav-btn').click(function() { scrollToSlide(this) });


    var switchInterval2 = setInterval(autoScrollSlideInterview, slideInterval);
    // Остановка прокрутки при наведении мыши на слайдер
    $('.interview-slider__viewport').hover(function(){
        clearInterval(switchInterval2);
    },function() {
        switchInterval2 = setInterval(autoScrollSlideInterview, slideInterval);
    });


    // Переход к нужному слайду по кнопкам навигации
    $('.interview-slider__next').click(function() {
        scrollToNextSlide();
    });
    $('.interview-slider__prev').click(function() {
        scrollToPrevSlide();
    });


    $('.sp-slider__prev').click(function() {
        scrollToPrevSpSlide();
        var slides = $('.sp-preview');
        $(slides[activeSlide3]).fadeOut(300);
        setTimeout(function () {
            $(slides[activeSlide3-1]).fadeIn(700);
        },500);
    });
    $('.sp-slider__next').click(function() {
        scrollToNextSpSlide();
        var slides = $('.sp-preview');
        $(slides[activeSlide3-2]).fadeOut(300);
        setTimeout(function () {
            $(slides[activeSlide3-1]).fadeIn(700);
        },500);
    });

    slideFotoLineScroll();

});

// Автопрокрутка слайдера
function autoScrollSlide() {
    if(activeSlide === slideCount || activeSlide <= 0 || activeSlide > slideCount ) {
        $('.news-text-slider__slidewrapper').css('transform', 'translate(0, 0)');
        activeSlide = 1;
        $('.news-text-slider__nav-btn').removeClass('news-text-slider__nav-btn_active');
        $(navBtn[0]).addClass('news-text-slider__nav-btn_active');

    } else {
        translateWidth = -$('.news-text-slider__viewport').width() * (activeSlide);
        $('.news-text-slider__slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        activeSlide++;
        $('.news-text-slider__nav-btn').removeClass('news-text-slider__nav-btn_active');
        $(navBtn[activeSlide - 1]).addClass('news-text-slider__nav-btn_active');
    }
}

// Автопрокрутка слайдера
function autoScrollSlideInterview() {
    if(activeSlide2 === slideCount2 || activeSlide2 <= 0 || activeSlide2 > slideCount2 ) {
        $('.interview-slider__slidewrapper').css('transform', 'translate(0, 0)');
        activeSlide2 = 1;

    } else {
        translateWidth = -$('.interview-slider__viewport').width() * (activeSlide2);
        $('.interview-slider__slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        activeSlide2++;
    }
}

// Скролл к определенному слайду
function scrollToSlide(element) {
    var navBtnId = $(element).index();

    if (navBtnId + 1 != activeSlide) {
        translateWidth = -$('.news-text-slider__viewport').width() * (navBtnId);
        $('.news-text-slider__slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        activeSlide = navBtnId + 1;

        $('.news-text-slider__nav-btn').removeClass('news-text-slider__nav-btn_active');
        $(element).addClass('news-text-slider__nav-btn_active');
    }
}

// Скролл к следующему слайду
function scrollToNextSlide() {
    var conutSlide = $('body').find('.interview-preview').length;

    if (activeSlide2 < conutSlide) {
        translateWidth = -$('.interview-slider__viewport').width() * (activeSlide2);
        $('.interview-slider__slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        activeSlide2++;
    }
}
// Скролл к предыдущему слайду
function scrollToPrevSlide() {
    if (activeSlide2 >= 2) {
        translateWidth = -$('.interview-slider__viewport').width() * (activeSlide2 - 2);
        $('.interview-slider__slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        activeSlide2--;
    }
}

// Скролл к следующему слайду
function scrollToNextSpSlide() {
    var conutSlide = $('body').find('.sp-picture').length;

    if (activeSlide3 < conutSlide) {
        translateWidth = -$('.sp-slider__viewport').width() * (activeSlide3);
        $('.sp-slider__slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        activeSlide3++;
    }
}
// Скролл к предыдущему слайду
function scrollToPrevSpSlide() {
    if (activeSlide3 >= 2) {
        translateWidth = -$('.sp-slider__viewport').width() * (activeSlide3 - 2);
        $('.sp-slider__slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        activeSlide3--;
    }
}

// Перетаскивание слайдера фото
function slideFotoLineScroll() {
    var stopSrollPositionMouse = 0,     // Позиция остановки перетаскивания
        translateX,                     // Расстояние перетаскивания
        maxTranslateX = $('.foto-slider__sliderwrapper').innerWidth() - $(document).width(),    // Максимальное расстояние для перетаскивания слайдера
        lastPositionMouse,
        saveScrollPosition;


    // Обрабатываем нажатие мыши
    $('.foto-slider__sliderwrapper').mousedown(function (eventMD) {
        // Получаем позицию
        var startPositionMouse = eventMD.pageX;
        lastPositionMouse = eventMD.pageX;

        $(this).mousemove(function (eventMM) {
            // Перетаскивание влево
            if (lastPositionMouse > eventMM.pageX) {
                console.log('Перемещение влево');
                translateX = (eventMM.pageX - startPositionMouse) + stopSrollPositionMouse;
                if (translateX >= -maxTranslateX) {
                    $('.foto-slider__sliderwrapper').css('transform','translateX(' + translateX +  'px)');
                    saveScrollPosition = translateX;
                }
            }
            // Перетаскивание вправо
            else if (lastPositionMouse < eventMM.pageX) {
                console.log('Перемещение вправо');
                translateX = (eventMM.pageX - startPositionMouse) + stopSrollPositionMouse;
                if (translateX < 0) {
                    $('.foto-slider__sliderwrapper').css('transform','translateX(' + translateX +  'px)');
                    saveScrollPosition = translateX;
                }
            }

            // Фиксируем положение мыши
            lastPositionMouse = eventMM.pageX
        });
        $(this).mouseup(function () {
            stopSrollPositionMouse = saveScrollPosition;
            $(this).unbind('mousemove');
        });
    });
}




