var numberInput = function(number) {
if((number % 3 === 0) && (number % 5 === 0)) {
  return "pingpong";
  } else {
    if(number % 3 === 0) {
      return "ping";
    }else {
      if(number % 5 === 0) {
      return "pong";
      }else {
        return "Please input numbers";
      }
    }
  }
};

$(document).ready(function(){
  
});
