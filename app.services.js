/**
 * Created by ArthurWANG on 14/12/1.
 */
angular.module('app.services', [])
    .factory('storageService', function () {
        var factory = {
            storageKey: 'contactApp',
            getInstance: function() {
                if(window.localStorage) {
                    var storage = window.localStorage.getItem(factory.storageKey)
                        || { author: 'Arthur', description: 'save contacts to localStorage', data: []};
                    return angular.fromJson(storage);
                }else{
                    return;
                }
            },
            saveInstance: function(instance){
                var string = angular.toJson(instance);
                window.localStorage.setItem(factory.storageKey, string);
            },
            getAll: function(){
                var result = null,
                    instance = factory.getInstance();
                if(instance) {
                    result = instance.data || [];
                }else{
                    result = [];
                }
                return result;
            },
            save: function(item){
                if(item.key) {
                    factory.update(item);
                }else{
                    factory.add(item);
                }
            },
            add: function(item){
                var instance = factory.getInstance();
                item.key = new Date().getTime();
                instance.data.push(item);
                factory.saveInstance(instance);
            },
            update: function(item){
                var instance = factory.getInstance(),
                    datas = instance.data;
                for(var i in datas) {
                    if(datas[i].key === item.key) {
                        datas[i] = item;
                        break;
                    }
                };
                factory.saveInstance(instance);
            }

        };
        return factory;
    });