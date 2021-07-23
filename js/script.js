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
$('.modal-background').click(function() {
    $('.modal-image').css('background', `#e6e6e6`)
    $('input[name="title"]').attr('value', '')
    $('select[name="genre"]').parent().find(`.option[data-value=${0}]`).addClass('selected')
    $('select[name="genre"]').parent().find('.current').text('Выберите жанр игры')
    $('select[name="category"]').parent().find(`.option[data-value=${0}]`).addClass('selected')
    $('select[name="category"]').parent().find('.current').text('Выберите категорию игры')
    $('select[name="events"]').parent().find(`.option[data-value=${0}]`).addClass('selected')
    $('select[name="events"]').parent().find('.current').text('Без событий')
    $('select[name="connection"]').parent().find(`.option[data-value=${0}]`).addClass('selected')
    $('select[name="connection"]').parent().find('.current').text('Выберите тип подключения')
    $('input[name="link"]').attr('value', '')
    $('input[name="link__more"]').attr('value', '')
    $('input[name="like"]').attr('value', '')
    $('input[name="dislike"]').attr('value', '')
})
$('.admin .menu-link').click(function(e) {
    e.preventDefault();
    $('.admin .menu-link').parent().removeClass('menu-item__active');
    $(this).parent().addClass('menu-item__active');
    $('#stat-settings, #stat-games').hide(350);
    $(`${$(this).attr('href')}`).show(350);
})

$('.games-item__settings').click(function() {
    let preview = $(this).attr('data-preview')
    let title = $(this).attr('data-title')
    let genre = $(this).attr('data-genre')
    let category = $(this).attr('data-category')
    let events = $(this).attr('data-events')
    let link = $(this).attr('data-link')
    let connection = $(this).attr('data-connection')
    let link__more = $(this).attr('data-link__more')
    let like = $(this).attr('data-like')
    let dislike = $(this).attr('data-dislike')
    let real = $(this).attr('data-real')
    $('.modal-image').css('background', `url(${preview}) center / cover no-repeat`)
    $('input[name="title"]').attr('value', title)
    $('select[name="genre"]').parent().find(`.option[data-value=${genre}]`).addClass('selected')
    $('select[name="genre"]').parent().find('.current').text($('select[name="genre"]').parent().find(`.option[data-value=${genre}]`).text())
    $('select[name="category"]').parent().find(`.option[data-value=${category}]`).addClass('selected')
    $('select[name="category"]').parent().find('.current').text($('select[name="category"]').parent().find(`.option[data-value=${category}]`).text())
    $('select[name="events"]').parent().find(`.option[data-value=${events}]`).addClass('selected')
    $('select[name="events"]').parent().find('.current').text($('select[name="events"]').parent().find(`.option[data-value=${events}]`).text())
    $('select[name="connection"]').parent().find(`.option[data-value=${connection}]`).addClass('selected')
    $('select[name="connection"]').parent().find('.current').text($('select[name="connection"]').parent().find(`.option[data-value=${connection}]`).text())
    $('input[name="link"]').attr('value', link)
    $('input[name="link__more"]').attr('value', link__more)
    $('input[name="like"]').attr('value', like)
    $('input[name="dislike"]').attr('value', dislike)
    if (real) {
        $('input[name="real"]').attr('checked', 'checked')
    }
    $('.modal').slideToggle(350);
    $('.modal-background').slideToggle(350);
})

$('.header-btn').click(function(e) {
    e.preventDefault();
    document.getElementById('header').scrollIntoView()
})