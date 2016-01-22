
//takes number and determines if it should changed
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
        return number;
      }
    }
  }
};

//makes the number into an array

var numberLoop = function(loop) {
  var resultArray = [];
  for(var index = 1; index <= loop; index += 1) {
    resultArray.push(numberInput(index));
  }
  return resultArray;
};

$(document).ready(function(){
  $("#ppForm").submit(function(event){
    var inputValue = $("input#userInput").val();
    var outputShow = numberLoop(inputValue);
      $(".output").text(outputShow);
      
    event.preventDefault();
  });
});
