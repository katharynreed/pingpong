var pingOrPongString = "";
var ping = "ping"
var pong = "pong"
var pingPong = "pingPong"


var divide = function(userInput) {
  for(var i = 0; i < userInput.length; i++) {
    if (userInput % 15 === 0) {
      ("#pingpong-results").append(pingPong)
    } else if (userInput % 5 === 0) {
      ("#pingpong-results").append(pong)
    } else if (userInput % 3 === 0) {
      ("#pingpong-results").append(ping)
    };
  };
};


$(document).ready(function() {
  $("#pingpong").submit(function(event){
    event.preventDeafult();
    alert("alsoworking")

    var userInput = parseInt($("#input").val());
    var pongOutput = divide(userInput);
    alert(userInput)
    alert (pongOutput)
    $("#pingpong-results").text(pongOutput)
  });
});
