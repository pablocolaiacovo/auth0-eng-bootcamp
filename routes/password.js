var express = require('express');
var router = express.Router();
var utils = require('../utils/passUtilities');

/* GET home page. */
router.get('/hash/:pass', function(req, res, next) {
    let password = req.params.pass;
    utils.hashPassword(password, 10, function(err, hash){
        if(err){
            console.error(err);
            res.json(err);
        }
        else{
            res.json(hash);
        }
    });
});

module.exports = router;
