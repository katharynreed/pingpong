var pingOrPongString = "";
var ping = "ping"
var pong = "pong"
var pingPong = "pingPong"


var convert = function(userInput) {
  if (userInput % 3) {
    return ping;
  } else if (userInput % 5) {
    return pong;
  } else if (userInput % 15) {
    return pingPong;
  };
};
