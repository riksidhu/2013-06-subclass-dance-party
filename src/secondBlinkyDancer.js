var SecondBlinkDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this,arguments);
  this.top = top;
  this.left = left;
};
SecondBlinkDancer.prototype = Object.create(Dancer.prototype);
SecondBlinkDancer.prototype.constructor = SecondBlinkDancer;

SecondBlinkDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //debugger;
  this.$node.addClass('seconddancer');
};

SecondBlinkDancer.prototype.lineup = function() {
  //Dancer.prototype.lineup.call(this);
  //debugger;
  this.$node.css("left","0px");
  //addClass('rightseconddancer').removeClass('seconddancer')
};

SecondBlinkDancer.prototype.cooleffects = function(){
  this.$node.toggleClass("effects");
};

SecondBlinkDancer.prototype.followbone = function(){
  var arrayofdogsandbones = window.dancers;
  var arrayofbones = [];
  for(var i = 0; i < arrayofdogsandbones.length; i++){
    if(arrayofdogsandbones[i] instanceof SecondBlinkDancer){
      arrayofbones.push(arrayofdogsandbones[i]);
    }
  }

  for(var j = 0; j < arrayofbones.length; j++){
    var x = Math.floor(arrayofbones[j].top);
    var y = Math.floor(arrayofbones[j].left);
    debugger;
    this.top;
    //distance = Math.sqrt( ( firstObject.x - secondObject.x ) * ( firstObject.x - secondObject.x ) + ( firstObject.y - secondObject.y ) * ( firstObject.y - secondObject.y ) );

  }
};


// Create a new array from dancers that have all the Follower Class

  //  // var oldDistance = -1;
  //  // for(var j = 0; j < array.length; j++){
  //  //   //var x = array[i].top;
  //  //   //var y = array[i].left;
  //  //   var asquared = (Math.floor(x) - Math.floor(7));
  //  //    distance = Math.sqrt( ( firstObject.x - secondObject.x ) * ( firstObject.x - secondObject.x ) + ( firstObject.y - secondObject.y ) * ( firstObject.y - secondObject.y ) );
  //  //   //var bsquared = 
  //  //   //var csquared = 
  //  // }
  // // var x = dancers[i].$node.get(0).offsetTop;
  // // var y = dancers[i].$node.get(0).offsetLeft;