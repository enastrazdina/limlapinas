var config = {
  defaults: {
    theme: 'light',
    lang: 'en'
  },
  getTheme: function () {
    return this.defaults;
  },
  setTheme(key, value) {
    var newUserConfig = Object.assign({}, {}, {
      key: value
    });
    console.log(newUserConfig);
    localStorage.setItem('config', JSON.stringify(newUserConfig));
    console.log(newUserConfig);
  },

  getLang: function () {
    return this.defaults;
  },
  setLang(key, value) {
    var newUserLangConfig = Object.assign({}, {}, {
      key: value
    });
    localStorage.setItem('langConfig', JSON.stringify(newUserLangConfig));
  }
};
