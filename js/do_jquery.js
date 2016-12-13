$(function() {

  $("#div1").click(function() {
    $("#div2").slideToggle();
  });

  $("#div2").click(function(){
    // $(".div2child").toggle();
    $(".div2child").css("color", "#ff0000");
    $(".div2child").animate({
        top: "80%", left: "90%"
      },
      5000,
      function(){
        $(this).css({
          left:"0px", top : "0px"
        });
      });
  });

  $(".div2child").click(function(){
    $('body').animate({
       scrollTop: $("#theDiv").offset().top
    }, 'slow');
  });

});
