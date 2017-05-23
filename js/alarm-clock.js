function Clock(){}

Clock.prototype.start = function(updateClock){
  window.setInterval(updateClock, 1000);
}

exports.clockModule = Clock;
