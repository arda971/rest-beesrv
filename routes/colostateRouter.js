var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Colostates = require('../models/colostates');

var colostateRouter = express.Router();
colostateRouter.use(bodyParser.json());


colostateRouter.route('/')
.get(function (req, res, next) {
    Colostates.find({}, function (err, colostate) {
        if (err) next(err) ;
        res.json(colostate);
    });
})


.post(function(req, res, next){
        Colostates.create(req.body, function (err, colostate) {
        if (err) next(err) ;
        console.log('colostate created!');
        var id = colostate._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the colostate with id: ' + id);
    }); 
})

.delete(function(req, res, next){
            Colostates.remove({}, function (err, resp) {
        if (err) next(err) ;
        res.json(resp);
    });
});

colostateRouter.route('/:colostateId')
.get(function (req, res, next) {
    Colostates.findById(req.params.colostateId, function (err, colostate) {
        if (err) throw err;
        res.json(colostate);
    });
})


.put(function(req, res, next){
    Colostates.findByIdAndUpdate(req.params.colostateId, {
        $set: req.body
    }, {
        new: true
    }, function (err, colostate) {
        if (err) next(err) ;
        res.json(colostate);
    });
})

.delete(function(req, res, next){
           Colostates.findByIdAndRemove(req.params.colostateId, function (err, resp) {  
             if (err) next(err) ;
        res.json(resp);
    });
});

module.exports=colostateRouter;

