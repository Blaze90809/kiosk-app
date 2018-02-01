myApp.controller('SidenavController', function($interval, $http, $mdSidenav, Service) {
    var sc = this;
    console.log('SideController created');

    sc.orderTotal = Service.order;
    sc.total = Service.total;
});