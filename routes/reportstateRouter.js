var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Reportstates = require('../models/reportstates');

var reportstateRouter = express.Router();
reportstateRouter.use(bodyParser.json());


reportstateRouter.route('/')
.get(function (req, res, next) {
    Reportstates.find({}, function (err, reportstate) {
        if (err) next(err) ;
        res.json(reportstate);
    });
})


.post(function(req, res, next){
        Reportstates.create(req.body, function (err, reportstate) {
        if (err) next(err) ;
        console.log('reportstate created!');
        var id = reportstate._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the reportstate with id: ' + id);
    }); 
})

.delete(function(req, res, next){
            Reportstates.remove({}, function (err, resp) {
        if (err) next(err) ;
        res.json(resp);
    });
});

reportstateRouter.route('/:reportstateId')
.get(function (req, res, next) {
    Reportstates.findById(req.params.reportstateId, function (err, reportstate) {
        if (err) next(err) ;
        res.json(reportstate);
    });
})


.put(function(req, res, next){
    Reportstates.findByIdAndUpdate(req.params.reportstateId, {
        $set: req.body
    }, {
        new: true
    }, function (err, reportstate) {
        if (err) next(err) ;
        res.json(reportstate);
    });
})

.delete(function(req, res, next){
           Reportstates.findByIdAndRemove(req.params.reportstateId, function (err, resp) {        if (err) next(err) ;
        res.json(resp);
    });
});

module.exports=reportstateRouter;

