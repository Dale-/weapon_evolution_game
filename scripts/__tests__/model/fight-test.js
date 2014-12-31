jest.dontMock('lodash');
jest.dontMock('../../model/player');
jest.dontMock('../../model/fight');
jest.dontMock('../../model/soldier');
jest.dontMock('../../model/weapon');
jest.dontMock('../../model/common-people');
jest.dontMock('../../model/defense-tool');


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
      '战士Damon用马鞭草攻击了普通人Stefan , 普通人Stefan受到了7点伤害 普通人Stefan剩余生命值：13\n\n'+

      '普通人Stefan攻击了战士Damon , 战士Damon用人血防御受到了3点伤害 战士Damon剩余生命值：17\n\n'+

      '战士Damon用马鞭草攻击了普通人Stefan , 普通人Stefan受到了7点伤害 普通人Stefan剩余生命值：6\n\n'+

      '普通人Stefan攻击了战士Damon , 战士Damon用人血防御受到了3点伤害 战士Damon剩余生命值：14\n\n'+

      '战士Damon用马鞭草攻击了普通人Stefan , 普通人Stefan受到了7点伤害 普通人Stefan剩余生命值：-1\n\n'+

      'Stefan fail\n\n';


      expect(console.log).toBeCalledWith(expectText);
    });
  });
});
