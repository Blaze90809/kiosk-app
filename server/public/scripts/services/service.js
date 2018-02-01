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
    }//End Function

    //This function calculates the total cost of the purchase.
    self.totalCalc = function (cost) {
        self.total = self.total + cost;
        console.log(self.total);
    }//End Total cost.

});//End Service