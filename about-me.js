$(document).on('scroll', function() {
    var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
    $('.background').css('background-position', 'center ' + scrollPercent + '%')
    console.log(scrollPercent);
})