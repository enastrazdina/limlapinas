var config = {
  defaults: {
    theme: 'light',
    lang: 'en'
  },
  get: function () {
    return this.defaults;
  },
  set: function (key, value) {
    var currentData = localStorage.getItem('config') || '{}';
    var dataStringToObject = JSON.parse(currentData);
    var newDataObject = Object.assign({}, dataStringToObject, {[key]: value});
    localStorage.setItem('config', JSON.stringify(newDataObject));
    console.log(newDataObject);
  },
};
