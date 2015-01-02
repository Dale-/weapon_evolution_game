var Bout = require('./model/bout');
var Player = require('./model/player');
var Soldier = require('./model/soldier');
var Weapon = require('./model/weapon');
var Skill = require('./model/skill');

(function PK() {
  var weapon = Weapon.all()[0];
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
  } else if(bout.getSoldierWeaponName() === '利剑') {
    while(true) {
      info = bout.boutCtriticalStrike();
      console.log(info);
      if(info.search('被打死了') != -1) {
        break;
      }
      bout.times ++;
    }
  }
})();
