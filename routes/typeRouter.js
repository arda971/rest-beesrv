var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Types = require('../models/types');


var typeRouter = express.Router();
typeRouter.use(bodyParser.json());


typeRouter.route('/')
.get(function (req, res, next) {
    Types.find({}, function (err, type) {
        if (err) next(err) ;
        res.json(type);
    });
})


.post(function(req, res, next){
        Types.create(req.body, function (err, type) {
       if (err) next(err) ;
        console.log('type created!');
        var id = type._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the type with id: ' + id);
    }); 
})

.delete(function(req, res, next){
            Types.remove({}, function (err, resp) {
       if (err) next(err) ;
        res.json(resp);
    });
});

typeRouter.route('/:typeId')
.get(function (req, res, next) {
    Types.findById(req.params.typeId, function (err, type) {
        if (err) next(err) ;
        res.json(type);
    });
})


.put(function(req, res, next){
    Types.findByIdAndUpdate(req.params.typeId, {
        $set: req.body
    }, {
        new: true
    }, function (err, type) {
        if (err) next(err) ;
        res.json(type);
    });
})

.delete(function(req, res, next){
           Types.findByIdAndRemove(req.params.typeId, function (err, resp) {  
               if (err) next(err) ;
        res.json(resp);
    });
});

module.exports=typeRouter;

