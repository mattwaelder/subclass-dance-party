var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //making blinky dancer obj with properties of dancer
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

//setting new prototype obj based on makeDander proto
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
//resetting the constructor
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

// blinky dancer's step at this time, is inherited from dancer
MakeBlinkyDancer.prototype.oldStep = MakeBlinkyDancer.prototype.step;

//shadowing step
MakeBlinkyDancer.prototype.step = function (timeBetweenSteps) {
  this.oldStep(timeBetweenSteps);
  this.$node.toggle();
};