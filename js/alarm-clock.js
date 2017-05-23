function Clock(){
  this.alarms = [];
}

Clock.prototype.start = function(displays) {
  window.setInterval(this.update, 1000, displays, this);
}

Clock.prototype.update = function(displays, context) {
  displays.update();
  if(context.checkForAlarm()) {
    displays.show();
    window.setTimeout(displays.hide, 10000);
  }
}

Clock.prototype.checkForAlarm = function(){
  return this.alarms.includes(moment().format('LTS'));
}

Clock.prototype.addAlarm = function(userAlarm) {
  this.alarms.push(userAlarm.replace(/\s/, ":00 "));
}

exports.clockModule = Clock;
