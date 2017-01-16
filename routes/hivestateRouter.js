var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Hivestates = require('../models/hivestates');

var hivestateRouter = express.Router();
hivestateRouter.use(bodyParser.json());


hivestateRouter.route('/')
.get(function (req, res, next) {
    Hivestates.find({}, function (err, hivestate) {
        if (err) next(err) ;
        res.json(hivestate);
    });
})


.post(function(req, res, next){
        Hivestates.create(req.body, function (err, hivestate) {
        if (err) next(err) ;
        console.log('hivestate created!');
        var id = hivestate._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the hivestate with id: ' + id);
    }); 
})

.delete(function(req, res, next){
            Hivestates.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

hivestateRouter.route('/:hivestateId')
.get(function (req, res, next) {
    Hivestates.findById(req.params.hivestateId, function (err, hivestate) {
        if (err) next(err) ;
        res.json(hivestate);
    });
})


.put(function(req, res, next){
    Hivestates.findByIdAndUpdate(req.params.hivestateId, {
        $set: req.body
    }, {
        new: true
    }, function (err, hivestate) {
        if (err) next(err) ;
        res.json(hivestate);
    });
})

.delete(function(req, res, next){
           Hivestates.findByIdAndRemove(req.params.hivestateId, function (err, resp) {  
              if (err) next(err) ;
        res.json(resp);
    });
});

module.exports=hivestateRouter;

