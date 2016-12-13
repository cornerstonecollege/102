function FormClicked() {
  var email = document.getElementById("inEmail").value;
  var password = document.getElementById("inPassword").value;

  if (email == "luiz_peres10@hotmail.com" && password == 123456) {
    window.alert("The user has logged in");
  } else {
    window.alert("Incorrect user/password.");
  }
}
