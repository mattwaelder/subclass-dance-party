var MakeDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.step(timeBetweenSteps);
  this.setPosition(top, left);

  this.$node.on('mouseenter', function(e) {
    let top =(($("body").height()) / 2) * Math.random();
    let left = (($("body").width()) / 2) * Math.random();
    $(e.currentTarget).css({
      'top': top + 'px',
      'left': left + 'px'
      });
  })

};

MakeDancer.prototype.step = function (timeBetweenSteps) {
  let fn = this.step.bind(this, timeBetweenSteps);
  setTimeout(fn, timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


