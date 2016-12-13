var leftSpan = 0;
var topSpan = 0;

function btnMoveClicked() {
  leftSpan = leftSpan + 20;
  var div_move = document.getElementById('div-move');
  div_move.style.left = leftSpan;
  div_move.style.width = leftSpan;

  if (leftSpan >= div_move.parentElement.clientWidth - leftSpan - 20) {
    leftSpan = 0;
  }
}

function moveSpan() {
  topSpan = topSpan + 20;
  var span = document.getElementById('span-title');
  span.style.top = topSpan;

  if (topSpan > span.parentElement.clientHeight - topSpan) {
    topSpan = 0;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // call btnMoveClicked() every 100 miliseconds
  window.setInterval(btnMoveClicked, 100);

  window.setInterval(moveSpan, 200);
});

// thread functions
// window.setTimeout
//
// window.setInterval
