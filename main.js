$(document).ready(function () {
  var originalEl = $('.original');

  var deleteSticker = function () {
    $(this).parent().remove();
  }

  var autosize = function () {
    var el = $(this);
    setTimeout(function () {
      el.css({
        height: 'auto',
      });

      el.css({
        height: el[0].scrollHeight
      });
    }, 0);
  }

  var cloneSticker = function () {
    var newSticker = originalEl.clone();

    newSticker.removeClass('original');
    newSticker.appendTo('body');
    newSticker.draggable();

    newSticker.find('.close').on('click', deleteSticker);
    newSticker.find('textarea').on('keydown', autosize);

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

  $('.add').on('click', cloneSticker);
});