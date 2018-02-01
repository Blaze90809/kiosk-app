myApp.controller('LightingController', function($interval, $http, Service){
    console.log('Lighting Controller created');
    let lc = this;

    lc.lighting = {data: []};

    //GET route for lighting items
    lc.getLighting = function(){
        $http.get('/lighting').then(function(response){
            console.log(response);
            lc.lighting.data=response.data;
        }).catch(function(error){
            console.log('Failure getting lighting', error)
        })
    };//End GET Route.
    lc.getLighting();

    //Send purchase data to the service.
    lc.addOrders = function(lighting){
        Service.addOrders(lighting);
    }//End orders.

});//End Lighting Controller