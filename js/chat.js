$(function(){
  // define the server url
  var url = "http://api.ideiadoluiz.com.br/chat/code.php";
  // initialize the counter
  var varCounter = 0;
  // asks the user for his/her name
  var varName = prompt("What is your name?");

  // listener
  $("#btnSend").click(function(){
    // if the message is empty, we leave the function.
    if ($("#txtMessage").val() == "") {
      return;
    }

    // request the server to save the message
    var request = $.post(url, {
      type: "send",
      name: varName,
      message: $("#txtMessage").val()
    });

    // if fail, we will alert the user
    request.fail(function(a, b, c){
      console.log(a + " " + b + c);
    });

    // we clean the message afterwards
    request.always(function(){
      $("#txtMessage").val("");
    });
  });

  // forever loop in a thread
  // it will be called every second.
  setInterval(function(){
    var request = $.post(url, {
      type: "get",
      counter: varCounter
    });

    request.fail(function(err){
      console.log("error");
    });

    request.done(function(data){
      // set the counter to the last message counter
      varCounter = data.lastCounter;
      var i = 0;
      while(i < data.messages.length) {
        // build the message with the array
        var message = data.messages[i].user + ":" +
                      data.messages[i].value + "\n";
        // append the message to the chat
        $("#txtChat").append(message);
        // increment the variable 'i'
        i = i + 1;
      }

      // put the scroll at the bottom
      $("#txtChat").scrollTop($("#txtChat")[0].scrollHeight);
    });
  }, 1000); // call it every second

});
