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
  for(var i =1; i <= number; i += 1) {
    push(number(i));
  }
};

// $(document).ready(function(){
//   $("#ppForm").submit(function(event) {
//     var
//     $(".output").text(output);
//   });
// });
