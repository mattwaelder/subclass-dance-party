var MakeBouncyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  var styleSettings = {
    border: "5px solid seashell",
    background: 'pink'
  };
  this.$node.css(styleSettings);
};

MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncyDancer.prototype.constructor = MakeBouncyDancer;

MakeBouncyDancer.prototype.oldStep = MakeBouncyDancer.prototype.step;

MakeBouncyDancer.prototype.step = function(timeBetweenSteps) {
  this.oldStep(timeBetweenSteps);
  // this.$node.slideToggle("slow");
  this.$node.toggleClass('bouncy');
  // this.$node.animate({
  //   border: "50px solid green";
  // })
}


/////////////////////////////////////////////////////////////
//not bouncy

// var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   MakeDancer.call(this, top, left, timeBetweenSteps);
// };

// MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
// MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

// MakeBlinkyDancer.prototype.oldStep = MakeBlinkyDancer.prototype.step;

// MakeBlinkyDancer.prototype.step = function (timeBetweenSteps) {
//   this.oldStep(timeBetweenSteps);
//   this.$node.toggle();
// };