jest.dontMock('../../model/player.js');


describe('Player', function() {

  describe('#attackPoint', function() {

    it('it should be return correct hp', function() {

      var Player = require('../../model/player');
      var player = new Player('Damon', 5, 1);
      var result = player.attack({name: 'Stefan', hp: 3, attackValue:1});

      expect(result).toBe('//Damon进攻');
    });
  });
});
