var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Hives = require('../models/hives');

var Verify= require('../routes/verify');

var hiveRouter = express.Router();
hiveRouter.use(bodyParser.json());


hiveRouter.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Hives.find({}, function (err, hive) {
       if (err) next(err) ;
        res.json(hive);
    });
})


.post(Verify.verifyOrdinaryUser, function (req, res, next){
        Hives.create(req.body, function (err, hive) {
        if (err) next(err) ;
            
            if(hive){
       
        var id = hive.id;
        console.log('hive created! with id:'+ id);
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the hive' );   
                            
            }else{
               console.log(err);  
            }
            

    }); 
})

.delete(Verify.verifyOrdinaryUser, function (req, res, next){
            Hives.remove({}, function (err, resp) {
        if (err) next(err) ;
        res.json(resp);
    });
});

hiveRouter.route('/:hiveId')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Hives.findById(req.params.hiveId, function (err, hive) {
       if (err) next(err) ;
        res.json(hive);
    });
})

.post(Verify.verifyOrdinaryUser, function (req, res, next){
    Hives.findByIdAndUpdate(req.params.hiveId, {
        $set: req.body
    }, {
        new: true
    }, function (err, hive) {
        if (err) next(err) ;
        res.json(hive);
    });
})

.put(Verify.verifyOrdinaryUser, function (req, res, next){
    Hives.findByIdAndUpdate(req.params.hiveId, {
        $set: req.body
    }, {
        new: true
    }, function (err, hive) {
        if (err) next(err) ;
        res.json(hive);
    });
})

.delete(Verify.verifyOrdinaryUser, function (req, res, next){
           Hives.findByIdAndRemove(req.params.hiveId, function (err, resp) { 
              if (err) next(err) ;
        res.json(resp);
    });
});

module.exports=hiveRouter;

