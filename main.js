$(document).ready(function () {
  var originalEl = $('.original');
  var draggableEl = $('.draggable-js')
  var mobileBreakpoint = 768;
  var isMobile = function () {
    return $(window).width() < mobileBreakpoint;
  }

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

  $('select').on('change', function () {
    if ($(this).val() == 'epilepsy') {
      $('body').removeClass().addClass('theme-epilepsy');
    } else if ($(this).val() == 'matrix') {
      $('body').removeClass().addClass('theme-matrix');
    } else if ($(this).val() == 'dark') {
      $('body').removeClass().addClass('theme-dark')
    } else if ($(this).val() == 'light') {
      $('body').removeClass().addClass('theme-light');
    }
  });

  var setActiveSticker = function (el) {
    el.appendTo(draggableEl);
  }

  var cloneSticker = function () {
    var newSticker = originalEl.clone();
    newSticker.removeClass('original');
    newSticker.appendTo(draggableEl);
    newSticker.draggable({
      containment: draggableEl
    });

    newSticker.find('.close').on('click', function () {
      var confirmationText = confirm('Do you really want to delete?');
      if (confirmationText) {
        deleteSticker(newSticker);
      }
    });

    newSticker.find('textarea')
      .on('keydown', autosizeInputField)
      .on('mousedown', function () {
        if (isMobile()) {
          return;
        }
        setActiveSticker(newSticker);
        $(this).focus();
      })

    var containerWidth = draggableEl.width();
    var containerHeight = draggableEl.height();
    var randomPosLeft = Math.floor(Math.random() * (containerWidth - newSticker.width()));
    var randomPosTop = Math.floor(Math.random() * (containerHeight - newSticker.height()));

    newSticker.on('dragstart focus click', function () {
      if (isMobile()) {
        return;
      }
      setActiveSticker(newSticker);
    });

    newSticker.css({
      'left': randomPosLeft,
      'top': randomPosTop
    });
  }

  cloneSticker();
  $('.add').on('click', cloneSticker);
});
