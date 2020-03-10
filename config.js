var config = {
    defaults: {
        theme: 'light'
    },
    getConfig: function() {
        return this.defaults;
    }, 
    setConfig(key, value) {
        var newDataObject = Object.assign({}, {}, {key: value});
        var stringObject = JSON.stringify(newDataObject);
        localStorage.setItem('config', stringObject);
    },
};

