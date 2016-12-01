var Hero = require("../hero");
var Food = require("../food");
var Rat = require("../rat");
var Challenge = require("../challenge");
var assert = require("assert");


var hero1;
var food1;
var food2;
var rat;
var challenge1;
var challenge2;

describe('Hero', function(){

  beforeEach(function(){
    hero1 = new Hero("Cuchulainn", 100, "wild boar", 0, 8 );
    food1 = new Food("wild boar", 60);
    food2 = new Food("grouse", 20);
    rat = new Rat();
    challenge1 = new Challenge(45, true, "gobblin");
    challenge2 = new Challenge(21, true, "psylocybin");
  });

  it('should have name', function(){
    assert.equal("Cuchulainn", hero1.name);
  });

  it('should have favourite food', function(){
    assert.equal(100, hero1.health);
  });

  it('should have favourite food', function(){
    assert.equal("wild boar", hero1.favouriteFood);
  });

  it('should say something', function(){
    assert.equal("hello my name is Cuchulainn", hero1.talk());
  });

  it('should be able to eat', function(){
    hero1.eat(food2);
    assert.equal(120, hero1.health);
  });

  it('should replenish with favourite food', function(){
    hero1.eat(food1);
    assert.equal(190, hero1.health);
  });

  it('should get poisonenous food', function(){
    rat.touchFood(food1);
    hero1.eat(food1);
    assert.equal(90, hero1.health);
  });

  it('should check if he can pass challenge', function(){
    hero1.fight(challenge1);
    assert.equal(10, hero1.distanceOnJourney);
  })

  it('should collapse if challenge has a hallucinogenic type', function(){
    hero1.experience(challenge2);
    assert.equal(28, hero1.insanityLevel);
  })


});
