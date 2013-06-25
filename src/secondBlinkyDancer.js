var SecondBlinkDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this,arguments);
};
SecondBlinkDancer.prototype = Object.create(Dancer.prototype);
SecondBlinkDancer.prototype.constructor = SecondBlinkDancer;

SecondBlinkDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //debugger;
  this.$node.addClass('seconddancer').toggle();
};

SecondBlinkDancer.prototype.lineup = function() {
  //Dancer.prototype.lineup.call(this);
  //debugger;
  this.$node.css("left","0px");
  console.log('added second class');
  //addClass('rightseconddancer').removeClass('seconddancer')
};