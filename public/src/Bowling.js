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
  } else {
    this.updateTurn = 1;
    this.updateFrame += 1;
  };
};
