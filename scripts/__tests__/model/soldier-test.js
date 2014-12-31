jest.dontMock('../../model/soldier.js');
jest.dontMock('../../model/weapon.js');
jest.dontMock('../../model/defense-tool.js');
jest.dontMock('../../model/common-people.js');
jest.dontMock('../../model/player.js');
jest.dontMock('lodash');


describe('Soldier', function() {

  var Soldier;

  beforeEach(function() {
    Soldier = require('../../model/soldier');
    CommonPeople = require('../../model/common-people');
    Weapon = require('../../model/weapon');
  });

  describe('#attackPoint', function() {

    it('it should be return correct hp', function() {

      var soldier = new Soldier('张三', 10, 1, '利剑',['致命一击']);
      var result = soldier.attack(new CommonPeople('李四', 10, 1));
      var weapon = Weapon();

      var expectText = '战士张三用利剑攻击了普通人李四 , ' +
                       '战士张三发动了致命一击' +
                       '普通人李四受到了6点伤害 ' +
                       '普通人李四剩余生命值：4';

      expect(result).toBe(expectText);
    });
  });

  // describe('#getAttackValue', function() {
  //
  //   it('it should be return correct hp', function() {
  //
  //     var soldier = new Soldier('Damon', 5, 1, '马鞭草');
  //     soldier.getAttackValue();
  //     expect(soldier.attackValue).toBe(3);
  //   });
  // });

  describe('#getHp', function() {

    it('it should be return correct hp', function() {

      var soldier = new Soldier('Damon', 5, 1, '马鞭草', '人血');
      soldier.getHp();
      expect(soldier.hp).toBe(7);
    });
  });

});
