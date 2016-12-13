$(function(){
  var url = "http://localhost/postit";
  
  $.ajax(url).done(function(response){
    var node = document.importNode(response.documentElement, true);
    $("#tdTODO").append(node);
  });

  $.ajax(url + "?title=Number1").done(function(response){
    var node = document.importNode(response.documentElement, true);
    $("#tdTODO").append(node);
  });

  $.ajax(url + "?desc=fdffddf").done(function(response){
    var node = document.importNode(response.documentElement, true);
    $("#tdTODO").append(node);
  });

});
