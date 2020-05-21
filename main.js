$(document).ready(function () {
  var originalEl = $('.original');
  var draggableEl = $('.draggable-js')
  var selectThemeEl = $('.select-theme');
  var selectLangEl = $('.select-lang');
  var mobileBreakpoint = 768;
  var isMobile = function () {
    return $(window).width() < mobileBreakpoint;
  }

  var deleteSticker = function (stickerEl) {
    stickerEl.remove();
  };

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
  };

  var onAppLoad = function () {
    var appConfig = config.get();
    setTheme(appConfig.theme);
    selectThemeEl.val(appConfig.theme);
    selectLangEl.val(appConfig.lang);
    var stickers = stickersStorage.getAll();
    if (stickers.length > 0) {
      stickers.forEach(function (sticker) {
        renderSticker(sticker)
      })
    } else {
      renderSticker()
    }
  };

  var setTheme = function (theme) {
    var newTheme = 'theme-' + theme;
    var classList = $('body').attr('class').split(' ');

    classList = classList.filter(function (className) {
      return !className.startsWith('theme-')
    });
    classList.push(newTheme);
    $('body').attr('class', classList.join(' '));
  };

  var setActiveSticker = function (el) {
    el.appendTo(draggableEl);
  };

  var renderSticker = function (sticker) {
    var newSticker = originalEl.clone();
    newSticker.removeClass('original');
    newSticker.appendTo(draggableEl);
    newSticker.draggable({
      containment: draggableEl
    });
    var containerWidth = draggableEl.width();
    var containerHeight = draggableEl.height();
    var randomPosLeft = Math.floor(Math.random() * (containerWidth - newSticker.width()));
    var randomPosTop = Math.floor(Math.random() * (containerHeight - newSticker.height()));
    if (!sticker) {
      var sticker = stickersStorage.create({
        left: randomPosLeft,
        top: randomPosTop,
      })
    } else {};

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

    newSticker.on('dragstart focus click', function () {
      if (isMobile()) {
        return;
      }
      setActiveSticker(newSticker);
    });

    newSticker.css({
      'left': sticker.left,
      'top': sticker.top
    });
  };

  $('.add').on('click', renderSticker);

  selectThemeEl.on('change', function () {
    theme = $(this).val();
    setTheme(theme);
    config.update('theme', theme);
  });

  selectLangEl.on('change', function () {
    var lang = $(this).val();
    config.update('lang', lang);
  });

  onAppLoad();
});

function uuid() {
  var seed = Date.now();
  if (window.performance && typeof window.performance.now === "function") {
    seed += performance.now();
  }

  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (seed + Math.random() * 16) % 16 | 0;
    seed = Math.floor(seed / 16);

    return (c === 'x' ? r : r & (0x3 | 0x8)).toString(16);
  });
  return uuid;
}
