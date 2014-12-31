jest.dontMock('../../model/soldier.js');
jest.dontMock('../../model/weapon.js');
// jest.dontMock('../../model/defense-tool.js');
// jest.dontMock('../../model/common-people.js');
jest.dontMock('../../model/player.js');


describe('Soldier', function() {

  var Soldier;

  beforeEach(function() {
    Soldier = require('../../model/soldier');
    //CommonPeople = require('../../model/common-people');
    Weapon = require('../../model/weapon');
  });

  describe('#attackPoint', function() {

    it('it should be return correct hp', function() {

      var soldier = new Soldier('张三', 50, 2, '优质毒剑');
      // soldier.attackValue = weapon.getAttackValue();
      // weapon.skill.blood = jest.genMockFn();
      // weapon.skill.blood.mockReturnValue(2);
      var result = soldier.attack({name: '李四', hp: 50, attackValue: 1});

      // soldier.attackValue -= weapon.getAttackValue();

      var expectText = '战士张三用优质毒剑攻击了普通人李四,' +
                       '李四受到了6点伤害,' +
                       '李四中毒了,李四剩余生命：44';

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

  // describe('#getHp', function() {
  //
  //   it('it should be return correct hp', function() {
  //
  //     var soldier = new Soldier('Damon', 5, 1, '马鞭草', '人血');
  //     soldier.getHp();
  //     expect(soldier.hp).toBe(7);
  //   });
  // });

});
