$(document).ready(function () {
  var originalEl = $('.original');

  var deleteSticker = function (stickerEl) {
    stickerEl.remove();
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

  var setActiveSticker = function (event, el) {
    if (event) {
      event.stopPropagation();
    }
    el.appendTo('body');
  }

  var cloneSticker = function () {
    var newSticker = originalEl.clone();

    newSticker.removeClass('original');
    newSticker.appendTo('body');
    newSticker.draggable();

    newSticker.find('.close').on('click', function () {
      var confirmationText = confirm('Do you really want to close?');
      if (confirmationText === true) {
        deleteSticker($(this).parent());
      } else {
        return false;
      }
    });

    newSticker.find('textarea')
      .on('keydown', autosizeInputField)
      .on('focus', function () {
        // newSticker.trigger('focus');

        setActiveSticker(null, newSticker);
        $(this).focus();
      })

    var bodyWidth = document.body.clientWidth
    var bodyHeight = document.body.clientHeight;
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));

    newSticker.on('dragstart focus', function (e) {
      setActiveSticker(e, newSticker);
    });


    newSticker.css({
      'left': randPosX,
      'top': randPosY
    });
  }
  cloneSticker();

  $('.add').on('click', cloneSticker);
});
