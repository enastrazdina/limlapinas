$(document).ready(function () {
  var originalEl = $('.original');
  var footerHeight = 25;

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
    el.appendTo('.draggable-js');
  }

  var cloneSticker = function () {
    var newSticker = originalEl.clone();

    newSticker.removeClass('original');
    newSticker.appendTo('.draggable-js');
    newSticker.draggable({
      containment: '.draggable-js'
    });

    newSticker.find('.close').on('click', function () {
      var confirmationText = confirm('Do you really want to delete?');
      if (confirmationText) {
        deleteSticker($(this).parent());
      }
    });

    newSticker.find('textarea')
      .on('keydown', autosizeInputField)
      .on('mousedown', function () {
        setActiveSticker(null, newSticker);
        $(this).focus();
      })

    var containerWidth = $('.draggable-js').width();
    var containerHeight = $('.draggable-js').height();
    var randomPosLeft = Math.floor(Math.random() * (containerWidth - newSticker.width()));
    console.log(newSticker.width(), newSticker.height());
    var randomPosTop = Math.floor(Math.random() * (containerHeight - newSticker.height() - footerHeight));


    newSticker.on('dragstart focus', function (e) {
      setActiveSticker(e, newSticker);
    });

    newSticker.css({
      'left': randomPosLeft,
      'top': randomPosTop
    });
  }
  cloneSticker();

  $('.add').on('click', cloneSticker);
});
