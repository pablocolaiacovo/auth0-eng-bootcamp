var express = require('express');
var router = express.Router();
var utils = require('../utils/passUtilities');

/* GET generate hash */
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

/* GET Check password strength */
router.get('/strength/:pass', function(req, res, next) {
    let password = req.params.pass;
    res.json({ isStrong : utils.validateStrength(password)});
});

module.exports = router;
