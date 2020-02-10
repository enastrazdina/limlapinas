$(document).ready(function () {
  var originalEl = $('.original');

  var deleteSticker = function () {
    $(this).parent().remove();
  }

  var autosizeInputField = function () {
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

  var setActiveSticker = function () {
    $(this).appendTo('body');
  }

  var cloneSticker = function () {
    var newSticker = originalEl.clone();

    newSticker.removeClass('original');
    newSticker.appendTo('body');
    newSticker.draggable();

    newSticker.find('.close').on('click', deleteSticker);
    newSticker.find('textarea').on('keydown', autosizeInputField);

    var bodyWidth = document.body.clientWidth
    var bodyHeight = document.body.clientHeight;
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));

    newSticker.on('mousedown', setActiveSticker);

    newSticker.css({
      'left': randPosX,
      'top': randPosY
    });
  }
  cloneSticker();

  $('.add').on('click', cloneSticker);
});
