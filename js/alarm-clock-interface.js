var Clock = require('./../js/alarm-clock.js').clockModule;

$(document).ready(function(){
  $('#click').click(function(event){
    var clock = new Clock();
    console.log(this);
    clock.getTime();
  });
});
