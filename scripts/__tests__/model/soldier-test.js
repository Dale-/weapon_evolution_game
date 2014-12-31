jest.dontMock('../../model/soldier.js');
jest.dontMock('../../model/weapon.js');
jest.dontMock('../../model/defense-tool.js');
jest.dontMock('../../model/player.js');
jest.dontMock('lodash');


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

  describe('#getAttackValue', function() {

    it('it should be return correct hp', function() {

      var soldier = new Soldier('Damon', 5, 1, '马鞭草');
      soldier.getAttackValue();
      expect(soldier.attackValue).toBe(3);
    });
  });

  describe('#getHp', function() {

    it('it should be return correct hp', function() {

      var soldier = new Soldier('Damon', 5, 1, '马鞭草', '人血');
      soldier.getHp();
      expect(soldier.hp).toBe(7);
    });
  });

});
