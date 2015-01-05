jest.dontMock('../../model/soldier.js');
jest.dontMock('../../model/weapon.js');
jest.dontMock('../../model/skill.js');
jest.dontMock('../../model/player.js');
jest.dontMock('../../model/round.js');
jest.dontMock('lodash');


describe('Round', function() {

  var Round;
  var Player;
  var Soldier;
  var Weapon;
  var Skill;

  beforeEach(function() {

    Skill = require('../../model/skill');
    Round = require('../../model/round');
    Weapon = require('../../model/weapon');
    Player = require('../../model/player');
    Soldier = require('../../model/soldier');
  });

  describe('.round', function() {

    it('it should be return correct string', function() {

      var soldier = new Soldier('张三', 50, 2, Weapon.all()[4]);
      var player = new Player('李四', 50, 1);
      var round = new Round(player, soldier);
      var result = round.round('致命一击');

      var expectText = '战士张三用寒冰剑攻击了普通人李四，李四受到了18点伤害，' +
                       '李四发动了致命一击，李四剩余生命：32\n//李四进攻\n';

      expect(result).toBe(expectText);
    });
  });

  // describe('.roundCtriticalStrike', function() {
  //
  //   it('it should be return correct string', function() {
  //
  //     var soldier = new Soldier('张三', 20, 2, Weapon.all()[0]);
  //     var player = new Player('李四', 20, 1);
  //     var round = new Round(player, soldier);
  //     var result = round.roundCtriticalStrike();
  //
  //     var expectText = '战士张三用利剑攻击了普通人李四，' +
  //                      '张三发动了致命一击，李四受到了15点伤害，' +
  //                      '李四剩余生命：5\n//李四进攻\n';
  //
  //     expect(result).toBe(expectText);
  //   });
  // });

});
