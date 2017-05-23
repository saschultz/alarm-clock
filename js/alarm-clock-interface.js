var Clock = require('./../js/alarm-clock.js').clockModule;

var updateClock = function(){
  $("#clock h2").text(`${moment().format('LTS')}`);
}

$(document).ready(function(){
  $("#clock").append(`<h2>${moment().format("LTS")}</h2>`)
  var clock = new Clock();
  clock.start(updateClock);
});
