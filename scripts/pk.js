var Bout = require('./model/bout');
var Skill = require('./model/skill');
var Weapon = require('./model/weapon');
var Player = require('./model/player');
var Soldier = require('./model/soldier');


(function PK() {

  var info = '';
  var weapon = Weapon.all()[randomNumber()];
  var player = new Player('李四', 30, 1);
  var soldier = new Soldier('张三', 30, 2, weapon);
  var bout = new Bout(player, soldier);

  while(true) {

    if(bout.getSoldierWeaponName() === '优质毒剑' ||
       bout.getSoldierWeaponName() === '火焰剑') {
         info = bout.boutBlood();

    } else if(bout.getSoldierWeaponName() === '利剑') {
      info = bout.boutCtriticalStrike();

    } else if(bout.getSoldierWeaponName() === '寒冰剑') {
      info = bout.boutFrozen();

    } else {
      info = bout.boutDizzy();
    }
    console.log(info);

    if(info.search('被打死了') != -1) {
      break;
    }
  }

})();

function randomNumber() {
  var number = Math.random();

  if(number <= 0.2) {
    return 0;

  } else if (number <= 0.4) {
    return 1;

  } else if (number <= 0.6) {
    return 2;

  } else if (number <= 0.8) {
    return 3;

  } else {
    return 4;
  }
}
