var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages']);

//Routes
myApp.config(function($routeProvider, $locationProvider){
   $locationProvider.hashPrefix('');
   $routeProvider
   .when('/furniture', {
       templateUrl: '/views/templates/furniture.html',
       controller: 'FurnitureController as fc'
   })
   .when('/home', {
       templateUrl: 'views/templates/home.html',
       controller: 'HomeController as hc'
   })
   .when('/lighting', {
       templateUrl: '/views/templates/lighting.html',
       controller: 'LightingController as lc'
   })
   .otherwise({
       redirectTo: '/furniture'
   });
});