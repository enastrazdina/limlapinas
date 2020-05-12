var stickers = [{
  update: function (id, data) {

  },
  create: function (sticker) {
    var allStickers = Object.values(this.getAll());
    allStickers.push({
      sticker
    });

    localStorage.setItem('stickers', JSON.stringify(allStickers));
  },
  delete: function (id) {

  },
  getAll: function () {
    var stickers = localStorage.getItem('stickers') || '[]';
    return JSON.parse(stickers);
  },
  reorder: function (id) {

  },
}];
