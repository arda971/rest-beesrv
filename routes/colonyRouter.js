var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Colonies = require('../models/colonies');

var Verify= require('../routes/verify');

var colonyRouter = express.Router();
colonyRouter.use(bodyParser.json());


colonyRouter.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Colonies.find(req.query, function (err, colony) {
        if (err) next(err) ;
        res.json(colony);
    });
})


.post(Verify.verifyOrdinaryUser, function (req, res, next){
        Colonies.create(req.body, function (err, colony) {
       if (err) next(err) ;
       
        if(colony){
                  var id = colony.id;
         console.log('colony created!'+ id );
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
       
             res.end('Added the colony');
        } else{
               console.log(err);  
            }
            

    }); 
})

.delete(Verify.verifyOrdinaryUser, function (req, res, next){
            Colonies.remove({}, function (err, resp) {
        if (err) next(err) ;
        res.json(resp);
    });
});

colonyRouter.route('/:colonyId')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Colonies.findById(req.params.colonyId, function (err, colony) {
        if (err) next(err) ;
        res.json(colony);
    });
})

.post(Verify.verifyOrdinaryUser, function (req, res, next){
    Colonies.findByIdAndUpdate(req.params.colonyId, {
        $set: req.body
    }, {
        new: true
    }, function (err, colony) {
        if (err) next(err) ;
        res.json(colony);
    });
})
.put(Verify.verifyOrdinaryUser, function (req, res, next){
    Colonies.findByIdAndUpdate(req.params.colonyId, {
        $set: req.body
    }, {
        new: true
    }, function (err, colony) {
        if (err) next(err) ;
        res.json(colony);
    });
})

.delete(Verify.verifyOrdinaryUser, function (req, res, next){
           Colonies.findByIdAndRemove(req.params.colonyId, function (err, resp) {   
               if (err) next(err) ;
        res.json(resp);
    });
});

module.exports=colonyRouter;

