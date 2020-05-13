var stickersStorage = {
  update: function (id, data) {

  },
  create: function (sticker) {
    var stickers = this.getAll();
    stickers.push(sticker);
    localStorage.setItem('stickers', JSON.stringify(stickers));
    return sticker;
  },
  delete: function (id) {

  },
  getAll: function () {
    var stickers = localStorage.getItem('stickers') || '[]';
    return JSON.parse(stickers);
  },
  reorder: function (id) {

  },
};
