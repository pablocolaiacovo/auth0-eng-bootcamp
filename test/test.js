var assert = require('assert');
var utils = require('../utils/passUtilities');
var bcrypt = require('bcrypt');

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
  })

});