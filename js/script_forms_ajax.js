$(function(){
  var request;

  $("#mainForm").submit(function(event){

    if (request) {
        request.abort();
    }

    var myData = $("#mainForm").find("input,textarea").serialize();

    request = $.ajax({
      url: "http://api.ideiadoluiz.com.br/email/index.php",
      method: "post",
      data: myData
    });

    request.done(function(data){
      $("#result").removeClass();
      
      if (data.description == "success") {
        $("#result")
          .html("Email sent")
          .addClass("bg-success");
      } else {
        $("#result")
          .html(data.description)
          .addClass("bg-danger");
      }
    });

    request.fail(function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR + " " + textStatus + errorThrown);
    });

    event.preventDefault();
  });
});
