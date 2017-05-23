var Clock = require('./../js/alarm-clock.js').clockModule;

var updateClock = function(){
  $("#clock h2").text(`${moment().format('LTS')}`);
}

var addAlarmToList = function(time){
  $('#alarm-list ul').append(`<li>${time}</li>`);
}

var showAlert = function(){
  $('#alarm').show();
}

$(document).ready(function(){
  $("#clock").append(`<h2>${moment().format("LTS")}</h2>`)
  var clock = new Clock();
  clock.start(updateClock, showAlert);

  $('#alarm-input').submit(function(event) {
    event.preventDefault();
    var userAlarm = $('#time').val();
    addAlarmToList(userAlarm);
    clock.addAlarm(userAlarm);
  });
});
