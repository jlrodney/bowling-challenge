$(document).ready(function(){
  var bowling = new Bowling("jamie");

  console.log(bowling.scores)
  console.log(bowling.player);

  $('.scores').on('click', function(data){
    bowling.score(data.currentTarget.innerHTML);
    $('#' + bowling.updateFrame +'-'+ bowling.updateTurn).text(data.currentTarget.innerHTML)
    console.log(bowling.player)
    console.log('#' + bowling.updateFrame +'-'+ bowling.updateTurn)
    bowling.turn()
    console.log(bowling.scores);
    console.log('#' + bowling.updateFrame +'-'+ bowling.updateTurn)
    // bowling.updateThrow += 1;
  });

});
