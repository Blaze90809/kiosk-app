var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HomeSchema = new Schema({
    name: String,
    cost: Number,
    photo: String
});

var Home = mongoose.model('Home', HomeSchema, 'homes');

//GET route for home goods.
router.get('/', function (req, res) {
    Home.find({}, function (err, foundHome) {
        if (err) {
            console.log('Error', err)
        } else {
            res.send(foundHome);
        }
    })
});//End GET route.

module.exports = router;