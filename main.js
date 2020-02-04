$(document).ready(function() {
    // var postIt = $('.sticker');
    var originalEl = $('.original');

    // $(postIt).draggable();


    var deleteSticker = function() {

        console.log(this);
        $(this).parent().remove();
    }

    var cloneSticker = function() {
        var newSticker = originalEl.clone();

        newSticker.removeClass('original');
        newSticker.appendTo('body');
        newSticker.draggable();
        newSticker.find('.close').on('click', deleteSticker);
        var bodyWidth = document.body.clientWidth
        var bodyHeight = document.body.clientHeight;
        var randPosX = Math.floor((Math.random() * bodyWidth));
        var randPosY = Math.floor((Math.random() * bodyHeight));

        $('.original').css({
            'left': randPosX,
            'top': randPosY
        });
    }


    cloneSticker();

    $('.new').on('click', cloneSticker);

    $('.add').on('click', moveSticker);

});


// newSticker.removeClass('original').addClass('sticker').appendTo('body').draggable();






// newSticker.removeClass('original').addClass('sticker');
// newSticker.draggable();




// $('.close').on('click', funClose);
/*

$('.original')
    .clone()
    .removeClass('original')
    .addClass('.sticker')
    .appendTo('body')
    .draggable()
var bodyWidth = document.body.clientWidth
var bodyHeight = document.body.clientHeight;
var randPosX = Math.floor((Math.random() * bodyWidth));
var randPosY = Math.floor((Math.random() * bodyHeight));

$('.original').css({
    'left': randPosX,
    'top': randPosY
});

*/