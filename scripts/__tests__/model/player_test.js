jest.dontMock('../../model/player');


describe('Player', function() {

  describe('.attackPoint', function() {

    it('it should be return correct hp', function() {

      var Player = require('../../model/player');
      var player = new Player('Damon', 5, 1);
      var result = player.attackPoint({name: 'Stefan', hp: 3, attackValue:1});
      
      expect(result).toBe(2);
    });
  });
});
