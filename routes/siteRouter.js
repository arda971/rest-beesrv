var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Sites = require('../models/sites');
var Verify= require('../routes/verify');


var siteRouter = express.Router();
siteRouter.use(bodyParser.json());


siteRouter.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Sites.find({}, function (err, site) {
        if (err) next(err) ;
        res.json(site);
    });
})


.post(Verify.verifyOrdinaryUser, function (req, res, next){
        Sites.create(req.body, function (err, site) {
       if (err) next(err) ;
            
            if(site){
                   
        var id = site._id;
  console.log('site created! with id:'+ id);
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the site' );   
                
            }else{
               console.log(err);   
                
            }

    }); 
})

.delete(Verify.verifyOrdinaryUser, function (req, res, next){
            Sites.remove({}, function (err, resp) {
       if (err) next(err) ;
        res.json(resp);
    });
});

siteRouter.route('/:siteId')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    
  
   
    Sites.findById(req.params.siteId, function (err, site) {
        if (err) next(err) ;
        res.json(site);
    });
})

.post(Verify.verifyOrdinaryUser, function (req, res, next){
    Sites.findByIdAndUpdate(req.params.siteId, {
        $set: req.body
    }, {
        new: true
    }, function (err, site) {
        if (err) next(err) ;
        res.json(site);
    });
})

.put(Verify.verifyOrdinaryUser, function (req, res, next){
    Sites.findByIdAndUpdate(req.params.siteId, {
        $set: req.body
    }, {
        new: true
    }, function (err, site) {
        if (err) next(err) ;
        res.json(site);
    });
})

.delete(Verify.verifyOrdinaryUser, function (req, res, next){
           Sites.findByIdAndRemove(req.params.siteId, function (err, resp) {   
              if (err) next(err) ;
        res.json(resp);
    });
});

module.exports=siteRouter;

