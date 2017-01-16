var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Tasks = require('../models/tasks');

var Verify= require('../routes/verify');

var taskRouter = express.Router();
taskRouter.use(bodyParser.json());


taskRouter.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Tasks.find(req.query, function (err, task) {
       if (err) next(err) ;
        res.json(task);
    });
})


.post(Verify.verifyOrdinaryUser, function (req, res, next){
        Tasks.create(req.body, function (err, task) {
        if (err) next(err) ;

            
                                if(task){
       
        var id = task.id;
        console.log('task created! with id:'+ id);
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the task  ' );
                            
            }else{
               console.log(err);  
            }  

    }); 
})

.delete(Verify.verifyOrdinaryUser, function (req, res, next){
            Tasks.remove({}, function (err, resp) {
        if (err) next(err) ;
        res.json(resp);
    });
});

taskRouter.route('/:taskId')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Tasks.findById(req.params.taskId, function (err, task) {
        if (err) next(err) ;
        res.json(task);
    });
})

.post(Verify.verifyOrdinaryUser, function (req, res, next){
    Tasks.findByIdAndUpdate(req.params.taskId, {
        $set: req.body
    }, {
        new: true
    }, function (err, task) {
       if (err) next(err) ;
        res.json(task);
    });
})


.put(Verify.verifyOrdinaryUser, function (req, res, next){
    Tasks.findByIdAndUpdate(req.params.taskId, {
        $set: req.body
    }, {
        new: true
    }, function (err, task) {
       if (err) next(err) ;
        res.json(task);
    });
})

.delete(Verify.verifyOrdinaryUser, function (req, res, next){
           Tasks.findByIdAndRemove(req.params.taskId, function (err, resp) {  
              if (err) next(err) ;
        res.json(resp);
    });
});

module.exports=taskRouter;

