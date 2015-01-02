jest.dontMock('../../model/soldier.js');
jest.dontMock('../../model/weapon.js');
jest.dontMock('../../model/skill.js');
jest.dontMock('../../model/player.js');
jest.dontMock('../../model/bout.js');


describe('Bout', function() {

  var Bout;
  var Player;
  var Soldier;
  var Weapon;
  var Skill;

  beforeEach(function() {
    Bout = require('../../model/bout');
    Player = require('../../model/player');
    Soldier = require('../../model/soldier');
    Weapon = require('../../model/weapon');
    Skill = require('../../model/skill');
  });

  describe('.boutBlood', function() {

    it('it should be return correct string', function() {

      var skill = new Skill('毒性', 0, 2, '中毒了，', 0.2);
      var weapon = new Weapon('优质毒剑', 4, skill);
      var soldier = new Soldier('张三', 50, 2, weapon);
      var player = new Player('李四', 50, 1);
      var bout = new Bout(player, soldier);
      var result = bout.boutBlood();

      var expectText = '战士张三用优质毒剑攻击了普通人李四，' +
                       '李四受到了6点伤害，' +
                       '李四中毒了，李四剩余生命：44\n' +
                       '李四受到2点毒性伤害,李四剩余生命：42';

      expect(result).toBe(expectText);
    });
  });

});
