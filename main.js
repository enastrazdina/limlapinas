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
  cloneSticker();

  $('.add').on('click', cloneSticker);

  var setTheme = function(theme) {
    var newTheme = 'theme-' + theme;
    var classList = $('body').attr('class').split(' ');

    classList = classList.filter(function (className) {
      return !className.startsWith('theme-')
    });
    classList.push(newTheme);
    $('body').attr('class', classList.join(' '));
  }
  
  $('.select-theme').on('change', function () {
    config.get();
    config.set('theme', theme);
    setTheme(theme);
  });

  $('.select-language').on('change', function () {
    selectedValue = $(this).val();
    config.get();
    config.getUserConfig();
    config.set('lang', selectedValue);
  });
  
  onAppLoad = function() {  
    var appConfig = config.get();
    var theme = appConfig.theme;
    setTheme(theme);
}
});
