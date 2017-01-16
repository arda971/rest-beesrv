var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Inspections = require('../models/inspections');
var Verify= require('../routes/verify');

var inspectionRouter = express.Router();
inspectionRouter.use(bodyParser.json());


inspectionRouter.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Inspections.find(req.query, function (err, inspection) {
       if (err) next(err) ;
        res.json(inspection);
    });
})


.post(Verify.verifyOrdinaryUser, function (req, res, next){
        Inspections.create(req.body, function (err, inspection) {
        if (err) next(err) ;
            
                    if(inspection){
       
      
        var id = inspection.id;
  console.log('inspection created! with id:'+ id);
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the inspection' );  
                            
            }else{
               console.log(err);  
            }    

    }); 
})

.delete(Verify.verifyOrdinaryUser, function (req, res, next){
            Inspections.remove({}, function (err, resp) {
        if (err) next(err) ;
        res.json(resp);
    });
});

inspectionRouter.route('/:inspectionId')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Inspections.findById(req.params.inspectionId, function (err, inspection) {
        if (err) next(err) ;
        res.json(inspection);
    });
})

.post(Verify.verifyOrdinaryUser, function (req, res, next){
    Inspections.findByIdAndUpdate(req.params.inspectionId, {
        $set: req.body
    }, {
        new: true
    }, function (err, inspection) {
       if (err) next(err) ;
        res.json(inspection);
    });
})


.put(Verify.verifyOrdinaryUser, function (req, res, next){
    Inspections.findByIdAndUpdate(req.params.inspectionId, {
        $set: req.body
    }, {
        new: true
    }, function (err, inspection) {
       if (err) next(err) ;
        res.json(inspection);
    });
})

.delete(Verify.verifyOrdinaryUser, function (req, res, next){
           Inspections.findByIdAndRemove(req.params.inspectionId, function (err, resp) {  
              if (err) next(err) ;
        res.json(resp);
    });
});

module.exports=inspectionRouter;

