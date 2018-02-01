var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FurnitureSchema = new Schema({
    name: String,
    cost: Number,
    photo: String
});

var Furniture = mongoose.model('Furniture', FurnitureSchema, 'furnitures');

//GET call for furniture.
router.get('/', function(req, res){
    Furniture.find({}, function(err, foundFurniture){
        if(err){
            console.log('Error', err);
            res.sendStatus(500);
        } else{
            res.send(foundFurniture);
            console.log(foundFurniture);
        }
    })
});//End call.

module.exports = router;