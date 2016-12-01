var Rat = function(){
  this.touchFood = function(food){
    food.type = "poisonenous food";
  }
};

var killerRat = Object.create(Rat.prototype);

console.log(killerRat);


module.exports = Rat;
