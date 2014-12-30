jest.dontMock('lodash');
jest.dontMock('../../model/player');
jest.dontMock('../../model/fight');
jest.dontMock('../../model/soldier');
jest.dontMock('../../model/weapon');
jest.dontMock('../../model/common-people');


describe('Fight', function() {

  describe('.fight', function() {

    it('it should be return correct string', function() {

      console.log = jest.genMockFn();

      var Fight = require('../../model/fight');
      var Soldier = require('../../model/soldier');
      var CommonPeople = require('../../model/common-people');

      var soldier = new Soldier('Damon', 20, 5, '马鞭草', '人血');
      var commonPeople = new CommonPeople('Stefan', 20, 5);
      soldier.getAttackValue();

      Fight.fight(soldier, commonPeople);
      var expectText =
          'Damon用马鞭草攻击了Stefan , Stefan受到了3点伤害 Stefan剩余生命值：3\n\n' +
          'Stefan攻击了Damon , Damon受到了1点伤害 Damon剩余生命值：5\n\n' +
          'Damon用马鞭草攻击了Stefan , Stefan受到了3点伤害 Stefan剩余生命值：0\n\n' +
          'Stefan fail\n\n';

      expect(console.log).toBeCalledWith(expectText);
    });
  });
});
