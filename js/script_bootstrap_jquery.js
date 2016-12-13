// this is pure javascript
// document.addEventListener("DOMContentLoaded", function(){
//
// });
//
// this is JQuery
// $(document).ready(function() {
//
// });

// this is the short version for the JQuery.
$(function(){

  $("#btnLogin").click(function() {
    // var email = document.getElementById('inEmail').value;
    var email = $("#inEmail").val();

    //var password = document.getElementById('inPassword').value;
    var password = $("#inPassword").val();

    //var resultEl = document.getElementById('result');
    var resultEl = $("#result");
    resultEl.removeClass();

    if (email == "luiz_peres10@hotmail.com" && password == 123456) {
      // resultEl.className = "bg-success";
      // resultEl.innerHTML = "The user has logged in.";

      resultEl.addClass("bg-success")
              .html("The user has logged in.");
    } else {
      // resultEl.className = "bg-danger";
      // resultEl.innerHTML = "Incorrect email/password.";
      resultEl.addClass("bg-danger")
              .html("Incorrect email/password.");
    }
  });

});
