/**
 * Created by ArthurWANG on 14/12/1.
 */
angular.module('app', ['ui.router','app.services'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            ///////////////
            //  状态配置  //
            ///////////////
            $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'module/home.html',
                controller: ['$scope', function ($scope) {
                    $scope.title = 'Home'
                }]
            }).state('contact', {
                url: '/contact',
                templateUrl: 'module/contact.html',
                controller: ['$scope', function ($scope) {
                    $scope.title = 'contact'
                }]
            }).state('contact.list', {
                url: '/list',
                templateUrl: 'module/list.html',
                controller: ['$scope', 'storageService', function ($scope, storageService) {
                    $scope.contactList = storageService.getAll();
                }]
            }).state('contact.add', {
                url: '/add',
                templateUrl: 'module/add.html',
                controller: ['$scope', '$state', 'storageService', function ($scope, $state, storageService) {

                    $scope.save = function () {
                        if ($scope.item.name === '' || $scope.item.mobile === '') {
                            alert('Please fill name or mobile number!!!');
                            return;
                        }
                        storageService.save($scope.item);

                        $state.go('contact.list');
                    };
                }]
            });
            ///////////////
            //  路由跳转  //
            ///////////////
            $urlRouterProvider
                .when('/', '/home')//当路径‘/’时，跳转到‘/home’

                .otherwise('/');
        }]
);