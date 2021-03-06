function Bowling(name) {
  this.player = name;
  this.updateScore = 0;
  this.updateFrame = 1;
  this.updateTurn = 1;
  this.scores = [];
  this.spare = false;
  this.strike = false;
}

Bowling.prototype.score = function (number) {
    this.scores.push(number);
};

Bowling.prototype.turn = function() {
  if (this.updateTurn === 1) {
    this.updateTurn = 2;
  } else if (this.updateFrame === 10) {
    throw new Error('You have finished the game');
  } else {
    this.updateTurn = 1;
    this.updateFrame += 1;
  };
};

Bowling.prototype.currentScore = function() {
  for (var i = 0; i < this.scores.length; i++) {
    this.updateScore += this.scores[i];
  };
};

Bowling.prototype.checkStrike = function(){
  var scoresLength = this.scores.length
  if (this.scores[scoresLength-1] === 10 && this.updateTurn === 1){
    this.strike = true;
  };
};

Bowling.prototype.checkSpare = function(){
  var scoresLength = this.scores.length
  if ( this.updateTurn === 2 && (this.scores[scoresLength-1] + this.scores[scoresLength-2]) ===10 ){
    this.spare = true;
  }
}
