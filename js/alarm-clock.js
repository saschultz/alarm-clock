function Clock(){
  this.alarms = [];
}

Clock.prototype.start = function(updateClock, showAlert) {
  window.setInterval(this.update, 1000, updateClock, this.anyAlarms, this.alarms, showAlert);
}

Clock.prototype.update = function(updateClock, anyAlarms, alarms, showAlert) {
  updateClock();
  if(anyAlarms(alarms)) {
    showAlert();
  }
}

Clock.prototype.anyAlarms = function(alarms){
  return alarms.includes(moment().format('LTS'));
}

Clock.prototype.addAlarm = function(userAlarm) {
  this.alarms.push(userAlarm.replace(/\s/, ":00 "));
}

exports.clockModule = Clock;
