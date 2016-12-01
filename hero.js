var Hero = function(name, health, favouriteFood, distanceOnJourney, insanityLevel){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.distanceOnJourney = distanceOnJourney;
  this.insanityLevel = insanityLevel;
};

Hero.prototype = {
  talk: function(){
    return "hello my name is Cuchulainn";
  },
  eat: function(food){
    if(food.type === this.favouriteFood){
      this.health += (food.replenishmentValue * 1.5);
    }
    else if
      (food.type === "poisonenous food"){
        this.health -= 10;
      }
    else{
      this.health += food.replenishmentValue;
    }
  },
  fight: function(challenge){
    if((this.health >= 50 && challenge.intensityLevel > 20) || (this.health > 20 &&
    challenge.passable === true)){
      this.distanceOnJourney += 10;
  }
},
  experience: function(challenge){
    if (challenge.type === "psylocybin" && this.insanityLevel < 10 ) {
          this.insanityLevel += 20;
    }
  }
};



module.exports = Hero;
