var MakeBoomyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  var styleSettings = {
    // opacity: '0.5',
    backgroundColor: "orange",
    transition: '0.1s'
  };

  // this.$node.addClass('boomy');
  this.$node.css(styleSettings);
};

MakeBoomyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBoomyDancer.prototype.constructor = MakeBoomyDancer;

MakeBoomyDancer.prototype.oldStep = MakeBoomyDancer.prototype.step;

MakeBoomyDancer.prototype.step = function (timeBetweenSteps) {
  //dance will be grow/shring or border radius :shrug:
  this.oldStep(timeBetweenSteps);
  // this.$node.toggleClass('dancer')

  //this does not work for some reason
  // this.$node.toggle(function() {
  //   this.currentTarget.removeClass("boomy").addClass("booming");
  // }, function() {
  //   this.currentTarget.removeClass("booming").addClass("boomy");
  // })

  this.$node.toggleClass('boomy')
  this.$node.toggleClass('booming')
};