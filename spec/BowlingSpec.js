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

})
