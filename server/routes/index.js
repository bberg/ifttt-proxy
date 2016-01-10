var express = require('express');
var router = express.Router();
var path = require('path');
var config = require(path.join(__dirname, '../', '../', 'config'));
var log = require(path.join(__dirname, '../', '../', 'log'));
var http = require('https')

var api = require(path.join(__dirname, '../', 'models', 'api-guts'))

router.post('/api/v1/wmata/trains', function(req, res, next) {
    log.info({"inboundRequest":{"ip":req.ip,"url":"/api/v1/wmata/trains"}})
    log.debug({"inboundRequest":{"ip":req.ip,"url":"/api/v1/wmata/trains","body": req.body,"headers":req.headers}})
    api.respond_with_trains(req,res)
});

router.post('/api/v1/', function(req,res,next){
    log.info({"inboundRequest":{"ip":req.ip,"url":"/api/v1/"}})
    log.debug({"inboundRequest":{"ip":req.ip,"url":"/api/v1/","body": req.body,"headers":req.headers}})
    api.general_proxy(req,res)
})

router.get('/', function(req,res){
    log.info('redirecting user to github')
    res.redirect('https://github.com/bberg/ifttt-proxy');
})

module.exports = router;