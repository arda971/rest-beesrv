var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Feedbacks = require('../models/feedbacks');

var Verify= require('../routes/verify');

var feedbackRouter = express.Router();
feedbackRouter.use(bodyParser.json());


feedbackRouter.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Feedbacks.find({}, function (err, feedback) {
        if (err) next(err) ;
        res.json(feedback);
    });
})


.post(function(req, res, next){
        Feedbacks.create(req.body, function (err, feedback) {
       if (err) next(err) ;
       
        if(feedback){
                  var id = feedback.id;
         console.log('feedback created!'+ id );
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
       
             res.end('Added the feedback');
        } else{
               console.log(err);  
            }
            

    }); 
})

.delete(Verify.verifyOrdinaryUser, function(req, res, next){
            Feedbacks.remove({}, function (err, resp) {
        if (err) next(err) ;
        res.json(resp);
    });
});

feedbackRouter.route('/:feedbackId')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Feedbacks.findById(req.params.feedbackId, function (err, feedback) {
        if (err) next(err) ;
        res.json(feedback);
    });
})

.post(function(req, res, next){
    Feedbacks.findByIdAndUpdate(req.params.feedbackId, {
        $set: req.body
    }, {
        new: true
    }, function (err, feedback) {
        if (err) next(err) ;
        res.json(feedback);
    });
})
.put(Verify.verifyOrdinaryUser, function(req, res, next){
    Feedbacks.findByIdAndUpdate(req.params.feedbackId, {
        $set: req.body
    }, {
        new: true
    }, function (err, feedback) {
        if (err) next(err) ;
        res.json(feedback);
    });
})

.delete(Verify.verifyOrdinaryUser, function(req, res, next){
           Feedbacks.findByIdAndRemove(req.params.feedbackId, function (err, resp) {   
               if (err) next(err) ;
        res.json(resp);
    });
});

module.exports=feedbackRouter;

