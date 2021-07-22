$('.games-header__more').on('click', function(e) {
    e.preventDefault();
    $(this).parent().parent().find('.games-item.hidden').toggle();
    if ($(this).parent().parent().find('.games-item.hidden').css('display') == 'none') {
        $(this).text('Посмотерть полностью ->');
    } else {
        $(this).text('Свернуть список ->');
    }
});
jQuery(function (f) {
    if(!$('body').hasClass('admin')) {
        f(window).scroll(function () {
            f('.menu-list')[(f(this).scrollTop() > 1150 ? "add" : "remove") + "Class"]("menu-fixed");
        });
    }
});
jQuery(function (f) {
    f(window).scroll(function () {
        f('.back')[(f(this).scrollTop() > 1250 ? "add" : "remove") + "Class"]("active");
    });
});

$('.games-item__checkbox input').on('change', function() {
    $(this).parent().parent().toggleClass('disabled');
});

function previewFile(input){
    var file = $("#modal-upload").get(0).files[0];
    if(file){
        var reader = new FileReader();
        reader.onload = function(){
            $(".modal-image").css('background', `url(${reader.result}) center / cover no-repeat`);
        }
        reader.readAsDataURL(file);
    };
};

$("#modal-upload").change(function(){
    previewFile(this);
    $('.modal-image__icon').hide();
    $('.modal-image__text').hide();
});
$(document).ready(function() {
    $('select').niceSelect();
});
$('.games-item__new, .modal-background').click(function() {
    $('.modal').slideToggle(350);
    $('.modal-background').slideToggle(350);
});
$('.admin .menu-link').click(function(e) {
    e.preventDefault();
    $('.admin .menu-link').parent().removeClass('menu-item__active');
    $(this).parent().addClass('menu-item__active');
    $('#stat-settings, #stat-games').hide(350);
    $(`${$(this).attr('href')}`).show(350);
})