myApp.controller('SidenavController', function ($interval, $http, $mdSidenav, Service, $mdToast) {
    var sc = this;
    console.log('SideController created');

    sc.orderTotal = Service.order;
    sc.total = Service.total;
    
    //This sends function to service.
    sc.makePurchase = function () {
        Service.makePurchase();
    }
    //Toast for purchase feedback.
    sc.openToast = function ($event) {
        $mdToast.show($mdToast.simple().textContent('Thanks for the purchase!'));
    }
});