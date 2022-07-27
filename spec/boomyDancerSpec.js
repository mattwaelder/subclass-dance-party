describe('boomyDancer', function() {
  var boomyDancer, clock;
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock.sinon.useFakeTimers();
    boomyDancer = new MakeboomyDancer(200, 200, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(boomyDancer.$node).to.be.an.instanceof(jQuery);
  })

  //fill in ????? for testing

  it('should have a step function that makes its node bounce', function() {
    sinon.spy(boomyDancer.$node, 'toggleClass'  //??
    boomyDancer.step();
    expect(boomyDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(boomyDancer, 'step');
      expect(boomyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(boomyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(boomyDancer.step.callCount).to.be.equal(2);
    });
  });
});