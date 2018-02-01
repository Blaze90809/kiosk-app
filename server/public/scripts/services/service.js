myApp.service('Service', function ($http, $location) {
    console.log('Service loaded');
    var self = this;
    self.order = { purchases: [], cost: [] }//Stores data for purchases
    self.total = 0;//This is the total cost of the purchase.

    //This function is sending purchase item to self.order object.
    self.addOrders = function (orderIn) {
        var cost = orderIn.cost;
        var purchase = orderIn.name;

        self.order.purchases.push(purchase);
        self.order.cost.push(cost);

        self.totalCalc(cost);
        console.log(self.order)
    };//End Function

    //This function calculates the total cost of the purchase.
    self.totalCalc = function(cost) {
        var costIn = cost;
        self.total = self.total + costIn;
        console.log(self.total);
    };//End Total cost.

    //Resets variables for next customer.
    self.makePurchase = function(){
        self.total = 0;
        self.order.purchases = [];
        self.order.cost = [];
    };//End purchase function.

});//End Service