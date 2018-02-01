myApp.controller('FurnitureController', function($interval, $http, Service, $timeout, $mdSidenav){
    console.log('Furniture Controller created');
    let fc = this;


    fc.furniture = {data: []};

    //This function receives the furniture items.
    fc.getFurniture = function(){
        $http.get('/furniture').then(function(response){
            console.log(response);
            fc.furniture.data=response.data;
        }).catch(function(error){
            console.log('Failure getting furniture', error)
        })
    }; //End furniture function
    fc.getFurniture();

    //Goes to the service to add purchases
    fc.addOrders = function(furniture){
        Service.addOrders(furniture);
    }//End Function
    fc.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
        return function(){
          $mdSidenav(componentId).toggle();
        };
    }

});//End Furniture Controller