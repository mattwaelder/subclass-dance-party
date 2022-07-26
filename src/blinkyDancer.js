

// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   //making a new step here, makes sure that things blink at different times

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.

//     // hide/show
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

/////////////////////////////////////////////////////////////////

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
MakeBlinkyDancer.prototype.step = function () {
  console.log(this, 'NEW STEP');
  //not a fn
  //this becomes window at some point???
  this.oldStep();
  this.$node.toggle();
};
