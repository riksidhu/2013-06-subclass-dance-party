var BlinkyDancer = function(top, left, timeBetweenSteps){
  //var BlinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // blinkyDancer.step = function(){
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();

  //    toggle() is a jQuery method to show/hide the <span> tag.
  //    * See http://api.jquery.com/category/effects/ for this and
  //    * other effects you can use on a jQuery-wrapped html tag. 
  //   blinkyDancer.$node.toggle();
  // };

  //return blinkyDancer;
  this.$node.onclick(function(){console.log("got here");});
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  //console.log('step!')
  // call the old version of step at the beginning of any call to this new version of step
  //debugger;
  Dancer.prototype.step.call(this);
  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  this.$node.addClass('bone').toggle();
};

BlinkyDancer.prototype.lineup = function(){
  //Dancer.prototype.lineup.call(this);
  this.$node.css("left","").css("right", "0px");
  console.log('added class');
};

