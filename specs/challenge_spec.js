var Challenge = require('../challenge');
var assert = require('assert');



describe('challenge', function(){

  beforeEach(function(){

    challenge = new Challenge(99, true);

  })

  it('should have an intensity level', function(){
    assert.equal(99, challenge.intensityLevel);
  })

  it('should be either possible or impossible', function(){
    assert.equal(true, challenge.passable);
  })

});
