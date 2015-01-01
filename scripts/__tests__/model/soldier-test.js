jest.dontMock('../../model/soldier.js');
jest.dontMock('../../model/weapon.js');
jest.dontMock('../../model/skill.js');
// jest.dontMock('../../model/defense-tool.js');
// jest.dontMock('../../model/common-people.js');
jest.dontMock('../../model/player.js');


describe('Soldier', function() {

  var Soldier;

  beforeEach(function() {
    Soldier = require('../../model/soldier');
    //CommonPeople = require('../../model/common-people');
    Weapon = require('../../model/weapon');
    Skill = require('../../model/skill');
  });

  // describe('#attack', function() {
  //
  //   it('it should be return correct hp', function() {
  //
  //     var soldier = new Soldier('张三', 50, 2, '优质毒剑');
  //     // soldier.attackValue = weapon.getAttackValue();
  //     // weapon.skill.blood = jest.genMockFn();
  //     // weapon.skill.blood.mockReturnValue(2);
  //     var result = soldier.attack({name: '李四', hp: 50, attackValue: 1});
  //
  //     // soldier.attackValue -= weapon.getAttackValue();
  //
  //     var expectText = '战士张三用优质毒剑攻击了普通人李四，' +
  //                      '李四受到了6点伤害，' +
  //                      '李四中毒了，李四剩余生命：44';
  //
  //     expect(result).toBe(expectText);
  //   });
  // });

  describe('#attackText', function() {

    it('it should be return correct hp', function() {

      var soldier = new Soldier('张三', 50, 2, '优质毒剑');

      var result = soldier.attackText(
        {name: '李四', hp: 50, attackValue: 1},
        {name: '优质毒剑', natureValue: 4, skill: '毒性'},
        {name: '毒性', times: 0, blood: 2, info: '中毒了，', probability: 0.2 },
        6
      );

      var expectText = '战士张三用优质毒剑攻击了普通人李四，' +
                       '李四受到了6点伤害，' +
                       '李四中毒了，李四剩余生命：44\n' +
                       '李四受到2点毒性伤害,李四剩余生命：42';

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
