$(document).ready(function(){
  var bowling = new Bowling("jamie");

  console.log(bowling.scores)
  console.log(bowling.player);

  $('.scores').on('click', function(data){
    bowling.score(data.currentTarget.innerHTML);
    $('#' + bowling.updateFrame +'-'+ bowling.updateTurn).text(data.currentTarget.innerHTML)
    bowling.turn()
    bowling.currentScore()
    console.log(bowling.updateScore);
    $('#score ' + bowling.updateFrame).text(data.updateScore);
  });





});
