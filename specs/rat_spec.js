var Food = require('../food');
var Rat = require('../rat');
var assert = require('assert');


var rat;
var food;



  describe('Rat', function(){


    beforeEach(function(){

  food = new Food("biscuits", 5);
  rat = new Rat();


});

  it('should poison food', function(){
    rat.touchFood(food);
    assert.equal("poisonenous food", food.type);
  })


});
