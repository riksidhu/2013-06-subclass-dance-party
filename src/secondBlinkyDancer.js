var SecondBlinkDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this,arguments);
};
SecondBlinkDancer.prototype = Object.create(Dancer.prototype);
SecondBlinkDancer.prototype.constructor = SecondBlinkDancer;

SecondBlinkDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};