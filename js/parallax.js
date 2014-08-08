$(document).ready(function() {
    console.log("INIT");
    $('div.bgParallax').each(function() {
        var obj = $(this);

        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / obj.data('speed')),
                    bgpos = '50% ' + yPos + 'px';

            obj.css('background-position', bgpos);

            console.log("SCROLL");
        });
    });

});