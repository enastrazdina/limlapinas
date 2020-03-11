var config = {
  defaults: {
    theme: 'light',
    lang: 'en'
  },
  getUserConfig: function(){
    var changedUserSettingConfig = localStorage.getItem('config') || '{}';
    var changedUserSettingDataToObject = JSON.parse(changedUserSettingConfig);
  },

  get: function () {    
    this.getUserConfig();
    var mergedObject = Object.assign({}, this.defaults, changedUserSettingDataToObject) ;
    return mergedObject;
  },
  set: function (key, value) {
    this.getUserConfig();
    var newDataObject = Object.assign({}, changedUserSettingDataToObject, {[key]: value});
    localStorage.setItem('config', JSON.stringify(newDataObject));
  },
};
