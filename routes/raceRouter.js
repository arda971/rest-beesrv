var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Races = require('../models/races');

var raceRouter = express.Router();
raceRouter.use(bodyParser.json());


raceRouter.route('/')
.get(function (req, res, next) {
    Races.find({}, function (err, race) {
        if (err) next(err) ;
        res.json(race);
    });
})


.post(function(req, res, next){
        Races.create(req.body, function (err, race) {
        if (err) next(err) ;
        console.log('race created!');
        var id = race._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the race with id: ' + id);
    }); 
})

.delete(function(req, res, next){
            Races.remove({}, function (err, resp) {
        if (err) next(err) ;
        res.json(resp);
    });
});

raceRouter.route('/:raceId')
.get(function (req, res, next) {
    Races.findById(req.params.raceId, function (err, race) {
        if (err) next(err) ;
        res.json(race);
    });
})


.put(function(req, res, next){
    Races.findByIdAndUpdate(req.params.raceId, {
        $set: req.body
    }, {
        new: true
    }, function (err, race) {
        if (err) next(err) ;
        res.json(race);
    });
})

.delete(function(req, res, next){
           Races.findByIdAndRemove(req.params.raceId, function (err, resp) {     
           if (err) next(err) ;
        res.json(resp);
    });
});

module.exports=raceRouter;

