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
                controller: ['$scope', function ($scope) {
                    $scope.contactList = [
                        {
                            name: 'Arthur Wang',
                            mobile: '+86-12345678900'
                        }
                    ];
                }]
            }).state('contact.add', {
                url: '/add',
                templateUrl: 'module/add.html',
                controller: ['$scope', function ($scope) {

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