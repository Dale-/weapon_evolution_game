var Bout = require('./model/bout');
var Player = require('./model/player');
var Soldier = require('./model/soldier');
var Weapon = require('./model/weapon');
var Skill = require('./model/skill');

(function PK() {

  var skill = new Skill('毒性', 0, 2, '中毒了，', 0.2);
  var weapon = new Weapon('优质毒剑', 4, skill);
  var soldier = new Soldier('张三', 50, 2, weapon);
  var player = new Player('李四', 50, 1);
  var bout = new Bout(player, soldier);

  var info = '';

  if(bout.getSoldierWeaponName() === '优质毒剑' ||
     bout.getSoldierWeaponName() === '火焰剑') {
     while(true) {
       info = bout.boutBlood();
       console.log(info);
       if(info.search('被打死了') != -1) {
         break;
       }
       bout.times ++;
     }
  }
})();
