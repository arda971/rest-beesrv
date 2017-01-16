var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Reports = require('../models/reports');

var Verify= require('../routes/verify');

var reportRouter = express.Router();
reportRouter.use(bodyParser.json());


reportRouter.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Reports.find({}, function (err, report) {
       if (err) next(err) ;
        res.json(report);
    });
})


.post(Verify.verifyOrdinaryUser, function (req, res, next){
        Reports.create(req.body, function (err, report) {
       if (err) next(err) ;
            
            if(report){
                
       
        var id = report._id;
        console.log('report created! with id:'+ id);
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the report with id: ' ); 
                
            }else{
                console.log(err);
            }

    }); 
})

.delete(Verify.verifyOrdinaryUser, function (req, res, next){
            Reports.remove({}, function (err, resp) {
        if (err) next(err) ;
        res.json(resp);
    });
});

reportRouter.route('/:reportId')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Reports.findById(req.params.reportId, function (err, report) {
       if (err) next(err) ;
        res.json(report);
    });
})

.post(Verify.verifyOrdinaryUser, function (req, res, next){
    Reports.findByIdAndUpdate(req.params.reportId, {
        $set: req.body
    }, {
        new: true
    }, function (err, report) {
       if (err) next(err) ;
        res.json(report);
    });
})

.put(Verify.verifyOrdinaryUser, function (req, res, next){
    Reports.findByIdAndUpdate(req.params.reportId, {
        $set: req.body
    }, {
        new: true
    }, function (err, report) {
       if (err) next(err) ;
        res.json(report);
    });
})

.delete(Verify.verifyOrdinaryUser, function (req, res, next){
           Reports.findByIdAndRemove(req.params.reportId, function (err, resp) {  
              if (err) next(err) ;
        res.json(resp);
    });
});

module.exports=reportRouter;

