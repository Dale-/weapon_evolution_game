var Bout = require('./model/bout');
var Player = require('./model/player');
var Soldier = require('./model/soldier');
var Weapon = require('./model/weapon');
var Skill = require('./model/skill');

(function PK() {
  var weapon = Weapon.all()[3];
  var soldier = new Soldier('张三', 50, 2, weapon);
  var player = new Player('李四', 50, 1);
  var bout = new Bout(player, soldier);

  var info = '';

  while(true) {

    if(bout.getSoldierWeaponName() === '优质毒剑' ||
        bout.getSoldierWeaponName() === '火焰剑') {

          info = bout.boutBlood();

    } else if(bout.getSoldierWeaponName() === '利剑') {

      info = bout.boutCtriticalStrike();
    } else if(bout.getSoldierWeaponName() === '寒冰剑') {
      info = bout.boutFrozen();
    }
    console.log(info);

    if(info.search('被打死了') != -1) {
      break;
    }
  }

})();
