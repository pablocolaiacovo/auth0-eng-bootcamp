const assert = require('assert');
const utils = require('../utils/passUtilities');
const bcrypt = require('bcrypt');
const zxcvbn = require('zxcvbn');

describe('Password Tests', function() {
  describe('hashPassword', function() {
    it('should be same hash', function(){
      utils.hashPassword("password", 10, function(err, hash){
        assert.equal(hash, bcrypt.compareSync("password", hash))
      });
    })
  });


  describe('validateStrength', function(){
    it('should be a weak password', function(){
      assert.equal(utils.validateStrength('12345'),false);
    });

    it('should be a strong password', function(){
      assert.equal(utils.validateStrength('iqwoueq9824$'),true);
    });

    it('should throw an exception', function(){
      assert.throws(() => utils.validateStrength());
    });
  });

  describe('validatePass', function(){
    it('should be a invalid pass', function(){
      utils.validatePassword('password','$2a$10$6328pUcWFtKVuQBOFI0nuufXMJhvgVFwWSQV8/UHf76bsMWJtsVLe',(err, valid) =>{
        assert.equal(valid,false);
      })
    });
      

    it('should be a valid pass', function(){
      utils.validatePassword('password','$2a$10$67V8pUcWFtKVuQBOFI0nuufXMJhvgVFwWSQV8/UHf76bsMWJtsVLe',(err, valid) =>{
        assert.equal(valid,true);
      });
    });

  });


  describe('generatePassword', function(){
    it('should generate a random password',function(){
      var pass1 = utils.generatePassword();
      var pass2 = utils.generatePassword();

      assert.notEqual(pass1,pass2,`Passwords are equal! pass1=${pass1} pass2=${pass2}`);
    });

    it('should generate a strong password',function(){
      var pass = utils.generatePassword();
      assert.ok(zxcvbn(pass).score > 3, `Password ${pass} is not strong enough`);
    });
  });

});