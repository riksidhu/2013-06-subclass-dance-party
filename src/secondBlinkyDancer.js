var SecondBlinkDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this,arguments);
};
SecondBlinkDancer.prototype = Object.create(Dancer.prototype);
SecondBlinkDancer.prototype.constructor = SecondBlinkDancer;

SecondBlinkDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //debugger;
  this.$node.addClass('seconddancer');

  // var array = window.dancers;
  // for(var i =0; i<array.length; i++){
  //  if(array[i] instanceof SecondBlinkDancer){
  //    array.splice(i,0);
  //  }

  //  var oldDistance = -1;
  //  for(var j = 0; j < array.length; j++){
   
  //    //var asquared = 
  //    //var bsquared = 
  //    //var csquared = 
  //  }
  // }


  // var x = dancers[i].$node.get(0).offsetTop;
  // var y = dancers[i].$node.get(0).offsetLeft;
};

SecondBlinkDancer.prototype.lineup = function() {
  //Dancer.prototype.lineup.call(this);
  //debugger;
  this.$node.css("left","0px");
  console.log('added second class');
  //addClass('rightseconddancer').removeClass('seconddancer')
};

SecondBlinkDancer.prototype.cooleffects = function(){
  this.$node.toggleClass("effects");
};


// Create a new array from dancers that have all the Follower Class 
