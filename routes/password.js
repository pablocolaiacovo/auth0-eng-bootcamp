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

router.get('/compare/:pass/:hash', function(req, res, next) {
    let password = req.params.pass;
    let hash = req.params.hash;
    utils.validatePassword(password,hash,((err,valid) => {
        if(err){
            console.error(err);
            res.json(err);
        }
        res.json({ isValid : valid });
    }))
    
});

router.get('/generate', function(req,res,next){
    res.json({password : utils.generatePassword()});
});


module.exports = router;
