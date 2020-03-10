var config = {
  defaults: {
    theme: 'light',
    lang: 'en'
  },
  get: function () {
    return this.defaults;
  },
  set: function (key, value) {
    var newUserConfig = Object.assign({}, {}, {key: value});
    localStorage.setItem('config', JSON.stringify(newUserConfig));
  },
};
