// jest.dontMock('../../model/soldier.js');
// jest.dontMock('../../model/weapon.js');
// jest.dontMock('../../model/skill.js');
// jest.dontMock('../../model/player.js');
// jest.dontMock('../../model/round.js');
//
//
// describe('Round', function() {
//
//   var Round;
//   var Player;
//   var Soldier;
//   var Weapon;
//   var Skill;
//
//   beforeEach(function() {
//     Round = require('../../model/round');
//     Player = require('../../model/player');
//     Soldier = require('../../model/soldier');
//     Weapon = require('../../model/weapon');
//     Skill = require('../../model/skill');
//   });
//
//   describe('.roundBlood', function() {
//
//     it('it should be return correct string', function() {
//
//       var soldier = new Soldier('张三', 50, 2, Weapon.all()[4]);
//       var player = new Player('李四', 50, 1);
//       var round = new Round(player, soldier);
//       var result = round.roundBlood();
//
//       var expectText = '战士张三用优质毒剑攻击了普通人李四，' +
//                        '李四受到了6点伤害，' +
//                        '李四中毒了，李四剩余生命：44\n' +
//                        '李四受到2点毒性伤害,李四剩余生命：42\n' +
//                        '//李四进攻\n';
//
//       expect(result).toBe(expectText);
//     });
//   });
//
//   describe('.roundCtriticalStrike', function() {
//
//     it('it should be return correct string', function() {
//
//       var soldier = new Soldier('张三', 20, 2, Weapon.all()[0]);
//       var player = new Player('李四', 20, 1);
//       var round = new Round(player, soldier);
//       var result = round.roundCtriticalStrike();
//
//       var expectText = '战士张三用利剑攻击了普通人李四，' +
//                        '张三发动了致命一击，李四受到了15点伤害，' +
//                        '李四剩余生命：5\n//李四进攻\n';
//
//       expect(result).toBe(expectText);
//     });
//   });
//
//   describe('.roundFrozen', function() {
//
//     it('it should be return correct string when times equal one', function() {
//
//       var soldier = new Soldier('张三', 30, 2, Weapon.all()[3]);
//       var player = new Player('李四', 30, 1);
//       var round = new Round(player, soldier);
//       var result = round.roundFrozen();
//
//       var expectText = '战士张三用寒冰剑攻击了普通人李四，李四受到了6点伤害，' +
//                        '李四冻僵了，李四剩余生命：24\n//李四进攻\n';
//       expect(result).toBe(expectText);
//     });
//
//     it('it should be return correct string when times equal two', function() {
//
//       var soldier = new Soldier('张三', 30, 2, Weapon.all()[3]);
//       var player = new Player('李四', 30, 1);
//       var round = new Round(player, soldier);
//
//       round.times = 2;
//       var result = round.roundFrozen();
//
//       var expectText = '//张三进攻\t李四剩余生命：24\n//李四进攻\n';
//       expect(result).toBe(expectText);
//     });
//
//     it('it should be return correct string when times equal three', function() {
//
//       var soldier = new Soldier('张三', 30, 2, Weapon.all()[3]);
//       var player = new Player('李四', 30, 1);
//       var round = new Round(player, soldier);
//
//       round.times = 3;
//       var result = round.roundFrozen();
//
//       var expectText = '//张三进攻\t李四剩余生命：24\n李四冻得直哆嗦，没有击中张三\n';
//       expect(result).toBe(expectText);
//     });
//   });
//
//   describe('.roundDizzy', function() {
//
//     it('it should be return correct string when times equal one', function() {
//
//       var soldier = new Soldier('张三', 30, 2, Weapon.all()[2]);
//       var player = new Player('李四', 30, 1);
//       var round = new Round(player, soldier);
//       var result = round.roundDizzy();
//
//       dizzy.mockReturnValue(true);
//
//       var expectText = '战士张三用晕锤攻击了普通人李四，李四受到了6点伤害，' +
//                        '李四晕倒了，李四剩余生命：24\n' +
//                        '李四晕倒了，无法攻击, 眩晕还剩：1轮\n';
//       expect(result).toBe(expectText);
//     });
//
//   });
//
// });
