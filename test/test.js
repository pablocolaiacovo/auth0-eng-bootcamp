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
});