describe("SecondBlinkDancer", function() {
  var secondblinkyDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    secondblinkyDancer = new SecondBlinkDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(secondblinkyDancer.$node).toEqual(jasmine.any(jQuery));
  });
  
  // it("should have a step function that makes its node blink", function() {
  //   spyOn(secondblinkyDancer.$node, 'toggle');
  //   secondblinkyDancer.step();
  //   expect(secondblinkyDancer.$node.toggle).toHaveBeenCalled();
  // });
});
