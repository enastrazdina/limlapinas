var config = {
  defaults: {
    theme: 'light',
    lang: 'en'
  },
  get: function () {    
    var changedData = localStorage.getItem('config') || '{}';
    var changedDataToObject = JSON.parse(changedData);
    var mergedObject = Object.assign({}, this.defaults, changedDataToObject) ;
    return mergedObject;
  },
  set: function (key, value) {
    var currentData = localStorage.getItem('config') || '{}';
    var dataStringToObject = JSON.parse(currentData);
    var newDataObject = Object.assign({}, dataStringToObject, {[key]: value});
    localStorage.setItem('config', JSON.stringify(newDataObject));
  },
};
