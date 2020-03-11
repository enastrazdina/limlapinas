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
// sadalīt failos stickeri un settingi // 


  cloneSticker();
  $('.add').on('click', cloneSticker);
  $('.select-theme').on('change', function () {
    var selectedValue = $(this).val();
    var newTheme = 'theme-' + selectedValue;
    var classList = $('body').attr('class').split(' ');
    classList = classList.filter(function (className) {
      return !className.startsWith('theme-')
    });
    classList.push(newTheme);
    $('body').attr('class', classList.join(' '));
    config.set('theme', selectedValue);
  });

    $('.select-language').on('change', function() {
      selectedValue =  $(this).val();
    var newLang = 'lang-' + selectedValue;
    var langList = $('body').attr('class').split(' ');
    langList = langList.filter(function(className) {
      return !className.startsWith('lang-')
    });
    langList.push(newLang);
    $('body').attr('class', langList.join(' '));

    config.set('lang', selectedValue);
    

  });
});

