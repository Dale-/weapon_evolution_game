jest.dontMock('../../model/soldier.js');
jest.dontMock('../../model/weapon.js');
jest.dontMock('../../model/skill.js');
// jest.dontMock('../../model/defense-tool.js');
// jest.dontMock('../../model/common-people.js');
jest.dontMock('../../model/player.js');


describe('Soldier', function() {

  describe('#attack', function() {

    it('it should be return correct string', function() {

      var Soldier = require('../../model/soldier');
      var Weapon = require('../../model/weapon');
      var Skill = require('../../model/skill');

      var skill = new Skill('毒性', 0, 2, '中毒了，', 0.2);
      var weapon = new Weapon('优质毒剑', 4, skill);

      var soldier = new Soldier('张三', 50, 2, weapon);
      var result = soldier.attack({name: '李四', hp: 50, attackValue: 1});

      var expectText = '战士张三用优质毒剑攻击了普通人李四，' +
                       '李四受到了6点伤害，' +
                       '李四中毒了，李四剩余生命：44\n' +
                       '李四受到2点毒性伤害,李四剩余生命：42';

      expect(result).toBe(expectText);
    });
  });

});
