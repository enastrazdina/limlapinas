$(document).ready(function() {
    var postIt = $(".sticker");

    $(postIt).draggable();

    $(".add").click(function() {
        $(postIt).animate({ left: '13', top: '35' });
    });

    $('.new').click(function() {

        $(".original")
            .clone()
            .removeClass("original")
            .addClass(".sticker")
            .appendTo("body")
            .draggable()
        var bodyWidth = document.body.clientWidth
        var bodyHeight = document.body.clientHeight;
        var randPosX = Math.floor((Math.random() * bodyWidth));
        var randPosY = Math.floor((Math.random() * bodyHeight));

        $('.original').css({
            'left': randPosX,
            'top': randPosY
        });
        $(".close").click(function() {
            $(this).parent().remove();
        });
    });
});