function Clock(){}

Clock.prototype.getTime = function(){
  console.log("it's time");
}

exports.clockModule = Clock;
