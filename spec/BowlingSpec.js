describe('', function() {
    var bowling;

    beforeEach(function() {
      bowling = new Bowling("jamie");
    })

    it('should have a player', function(){
      expect(bowling.player).toEqual("jamie")
    })

    it('should store the scores', function(){
      bowling.score(5)
      bowling.score(6)
      expect(bowling.scores).toEqual([5,6])
    })

    it ('should switch turn but not frame after a turn', function() {
      bowling.score(5)
      bowling.turn()
      expect(bowling.updateTurn).toEqual(2)
      expect(bowling.updateFrame).toEqual(1)
    })

    it ('should switch turn and frame after two turns', function() {
      bowling.score(5)
      bowling.turn()
      bowling.score(6)
      bowling.turn()
      expect(bowling.updateTurn).toEqual(1)
      expect(bowling.updateFrame).toEqual(2)
    })

    it ('should stop the game after the 10 frame', function() {
      var times = 20;
      for(var i=1; i < times; i++){
        bowling.turn();
      }
      expect(function() {bowling.turn()}).toThrowError('You have finished the game')
    })

    it ('should calculate your score', function() {
      bowling.score(9)
      bowling.score(7)
      bowling.score(6)
      bowling.score(6)
      bowling.currentScore()
      expect(bowling.updateScore).toEqual(28)
    })

    it ('should know if a move is strike', function() {
      bowling.score(10)
      bowling.checkStrike()
      expect(bowling.strike).toEqual(true)
    })

    it ('should know if a move is strike', function() {
      bowling.score(8)
      bowling.turn()
      bowling.score(2)
      bowling.checkSpare()
      expect(bowling.spare).toEqual(true)
    })

})
