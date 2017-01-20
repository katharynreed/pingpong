var pingOrPongString = "";

var divide = function(userInput) {
  for(var i = 1; i <= userInput; i++) {
    if (i % 15 === 0) {
      $("#pingpong-results").append("<p><strong>PING PONG!</strong></p>");
    } else if (i % 5 === 0) {
      $("#pingpong-results").append("<p><strong>PONG!</strong></p>");
    } else if (i % 3 === 0) {
      $("#pingpong-results").append("<p><strong>PING!</strong></p>");
    } else {
      $("#pingpong-results").append("<p>"+i+"</p>");
    }
  };
};


$(document).ready(function() {
  $("#pingpong").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#input").val());
    var pongOutput = divide(userInput);
    $("#pingpong-results").text(pongOutput);
    $(".img").show();
    $("#results").show()
  });
});
