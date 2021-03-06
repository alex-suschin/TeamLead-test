$(function() {

    AOS.init();

    $('.rewiews-slider').slick({
        dots: true,
        infinite: true,
        speed: 200,
        fade: true,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    jQuery(".btn").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top + 100;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
        return false;
    });

    $(window).on('load', function() {
        let phones = [
            { 'mask': '+7 \\ \\ ###-###-##-##' }
        ];

        $('input[type=tel]').inputmask({
            mask: phones,
            greedy: false,
            definitions: {
                '#': {
                    validator: '[0-9]',
                    cardinality: 1
                }
            }
        });
    });

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = "March 08 2021 00:00:00 GMT+0300";
    initializeClock('countdown', deadline);



});

$(window).on('load resize', function() {

    var width = $(window).width();

    if (width < '531') {
        $('.contain-mainimg').prependTo($('.contain-box'));
    }

    if (width > '530') {
        $('.contain-mainimg').insertAfter($('.contain-box__left'));
    }

});
//# sourceMappingURL=../sourcemaps/main.js.map
