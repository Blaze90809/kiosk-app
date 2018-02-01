var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LightingSchema = new Schema({
    name: String,
    cost: Number,
    photo: String
});

var Lighting = mongoose.model('Lighting', LightingSchema, 'lightings');

//GET route for lighting items.
router.get('/', function (req, res) {
    Lighting.find({}, function (err, foundLighting) {
        if (err) {
            console.log('Error', err)
        } else {
            res.send(foundLighting)
        }
    })
});//End GET route.

module.exports = router;