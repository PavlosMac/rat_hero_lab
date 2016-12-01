var Food = require('../food');
var assert = require('assert');

var food1 = new Food("chocolate", 8);
var food2 = new Food("grilled grouse");

describe('food', function(){
  it('should have a type', function(){
    assert.equal("chocolate", food1.type)
  })

  it('should have a replenishment value', function(){
    assert.equal(8, food1.replenishmentValue)
  })

});
