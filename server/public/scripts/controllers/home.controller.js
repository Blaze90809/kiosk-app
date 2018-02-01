myApp.controller('HomeController', function($interval, $http, Service){
    console.log('Home Controller created');
    let hc = this;

    hc.home = {data: []};
//GET route to get all home items.
    hc.getHome = function(){
        $http.get('/home').then(function(response){
            console.log(response);
            hc.home.data=response.data;
        }).catch(function(error){
            console.log('Failure getting home', error)
        })
    };//End GET route.
    hc.getHome();
//Goes to the service to add purchases
    hc.addOrder = function(home){
        Service.addOrders(home);
    }


});//End Home Controller