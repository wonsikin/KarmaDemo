/**
 * Created by ArthurWANG on 14/12/1.
 */
describe('app.services test', function () {
    var service;
    beforeEach(function () {
        if(window.localStorage) {
            window.localStorage.clear();
        }
        module('app.services');

        inject(function (storageService) {
            service = storageService;
        });
    });
    it('should be a string', function () {
        expect(angular.isString(service.storageKey)).toBeTruthy();
    });
    it('should be a object', function () {
        expect(angular.isObject(service.getInstance())).toBeTruthy();
    });

    it('should be an array', function () {
        expect(angular.isArray(service.getAll())).toBeTruthy();
    });

    it('should be an empty array', function () {
        expect(service.getAll().length).toEqual(0);
    });

    it('should be one item in the array', function () {
        var item = {
            name: 'Arthur',
            mobile: '+86-13452121990'
        };
        service.save(item);
        expect(service.getAll().length).toEqual(1);
    });
//    it('should be "Arthur"', function () {
//        expect(service.getAll()).toContain('Arthur');
//    });
});