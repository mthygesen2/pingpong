
//takes number and determines if it should changed
var numberInput = function(number) {
  if((number % 3 === 0) && (number % 5 === 0)) {
    return "PINGPONG";
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
  // var resultString = resultArray.toString();
  return resultArray;
};

//put it into a list

$(document).ready(function(){
  $("#ppForm").submit(function(event){
    var inputValue = $("#userInput").val();
    var outputShow = numberLoop(inputValue);
    outputShow.forEach(function(result){
      $(".output").append("<li>" +result+ "</li>")
    event.preventDefault();
    });
  });
});



// var inputValue = $("input#userInput").val();
// var outputShow = numberLoop(inputValue);
//
//   $(".output").text(outputShow)
