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

      var soldier = new Soldier('张三', 50, 2, Weapon.all()[4]);
      var player = new Player('李四', 50, 1);
      var bout = new Bout(player, soldier);
      var result = bout.boutBlood();

      var expectText = '战士张三用优质毒剑攻击了普通人李四，' +
                       '李四受到了6点伤害，' +
                       '李四中毒了，李四剩余生命：44\n' +
                       '李四受到2点毒性伤害,李四剩余生命：42\n' +
                       '//李四进攻\n';

      expect(result).toBe(expectText);
    });
  });

  describe('.boutCtriticalStrike', function() {

    it('it should be return correct string', function() {

      var soldier = new Soldier('张三', 20, 2, Weapon.all()[0]);
      var player = new Player('李四', 20, 1);
      var bout = new Bout(player, soldier);
      var result = bout.boutCtriticalStrike();

      var expectText = '战士张三用利剑攻击了普通人李四，' +
                       '张三发动了致命一击，李四受到了15点伤害，' +
                       '李四剩余生命：5\n//李四进攻\n';

      expect(result).toBe(expectText);
    });
  });

  describe('.boutFrozen', function() {

    it('it should be return correct string when times equal one', function() {

      var soldier = new Soldier('张三', 30, 2, Weapon.all()[3]);
      var player = new Player('李四', 30, 1);
      var bout = new Bout(player, soldier);
      var result = bout.boutFrozen();

      var expectText = '战士张三用寒冰剑攻击了普通人李四，李四受到了6点伤害，' +
                       '李四冻僵了，李四剩余生命：24\n//李四进攻\n';
      expect(result).toBe(expectText);
    });

    it('it should be return correct string when times equal two', function() {

      var soldier = new Soldier('张三', 30, 2, Weapon.all()[3]);
      var player = new Player('李四', 30, 1);
      var bout = new Bout(player, soldier);

      bout.times = 2;
      var result = bout.boutFrozen();

      var expectText = '//张三进攻\t李四剩余生命：24\n//李四进攻\n';
      expect(result).toBe(expectText);
    });

    it('it should be return correct string when times equal three', function() {

      var soldier = new Soldier('张三', 30, 2, Weapon.all()[3]);
      var player = new Player('李四', 30, 1);
      var bout = new Bout(player, soldier);

      bout.times = 3;
      var result = bout.boutFrozen();

      var expectText = '//张三进攻\t李四剩余生命：24\n李四冻得直哆嗦，没有击中张三\n';
      expect(result).toBe(expectText);
    });
  });

  describe('.boutDizzy', function() {

    it('it should be return correct string when times equal one', function() {

      var soldier = new Soldier('张三', 30, 2, Weapon.all()[2]);
      var player = new Player('李四', 30, 1);
      var bout = new Bout(player, soldier);
      var result = bout.boutDizzy();

      var expectText = '战士张三用晕锤攻击了普通人李四，李四受到了6点伤害，' +
                       '李四晕倒了，李四剩余生命：24\n' +
                       '李四晕倒了，无法攻击, 眩晕还剩：1轮';
      expect(result).toBe(expectText);
    });

    it('it should be return correct string when times equal five', function() {

      var soldier = new Soldier('张三', 30, 2, Weapon.all()[2]);
      var player = new Player('李四', 30, 1);
      var bout = new Bout(player, soldier);

      bout.times = 5;
      var result = bout.boutDizzy();

      var expectText = '//张三进攻\n//李四进攻\n';
      expect(result).toBe(expectText);
    });
  });

});
