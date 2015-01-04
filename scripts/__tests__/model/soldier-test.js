jest.dontMock('lodash');
jest.dontMock('../../model/soldier.js');
jest.dontMock('../../model/weapon.js');
jest.dontMock('../../model/skill.js');
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
      var result = soldier.attackText(
                   {name: '李四', hp: 50, attackValue: 1} , '毒性', 8);

      var expectText = '战士张三用优质毒剑攻击了普通人李四，李四受到了8点伤害，'+
                       '李四中毒了，李四剩余生命：50\n';

      expect(result).toBe(expectText);
    });
  });

  describe('#isDiedText', function() {

    it('it should be return correct string', function() {

      var Soldier = require('../../model/soldier');


      var soldier = new Soldier('张三', 0, 2);
      var result = soldier.isDiedText();

      var expectText = '\n张三被打死了';

      expect(result).toBe(expectText);
    });
  });

});
