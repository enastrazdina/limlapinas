var config = {
  defaults: {
    theme: 'light',
    lang: 'en'
  },
  getUserConfig: function(){
    var userConfig = localStorage.getItem('config') || '{}';
    return JSON.parse(userConfig);
  },

  get: function () {  
    return Object.assign({}, this.defaults, this.getUserConfig());
  },
  set: function (key, value) {
    var userConfig = this.getUserConfig();
    var newUserConfig = Object.assign({}, userConfig, {[key]: value});
    localStorage.setItem('config', JSON.stringify(newUserConfig));
    return newUserConfig;
  },
};
