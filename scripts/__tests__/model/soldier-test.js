jest.dontMock('../../model/soldier');
jest.dontMock('../../model/player');


describe('Soldier', function() {

  var Soldier;

  beforeEach(function() {
    Soldier = require('../../model/soldier');
  });

  describe('#attackPoint', function() {

    it('it should be return correct hp', function() {

      var soldier = new Soldier('Damon', 5, 1);
      var result = soldier.attackPoint(
                   {name: 'Stefan', hp: 3, attackValue:1});

      expect(result).toBe(2);
    });
  });
});
