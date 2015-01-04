var Round = require('./model/round');
var Skill = require('./model/skill');
var Weapon = require('./model/weapon');
var Player = require('./model/player');
var Soldier = require('./model/soldier');


(function PK() {

  var info = '';
  var weapon = Weapon.all()[2];
  var player = new Player('李四', 80, 1);
  var soldier = new Soldier('张三', 80, 2, weapon);
  var round = new Round(player, soldier);

 while(true) {

    // if(round.getSoldierWeaponName() === '优质毒剑' ||
    //    round.getSoldierWeaponName() === '火焰剑') {
         info = round.round();

    // } else if(round.getSoldierWeaponName() === '利剑') {
    //   info = round.roundCtriticalStrike();
    //
    // } else if(round.getSoldierWeaponName() === '寒冰剑') {
    //   info = round.roundFrozen();
    //
    // } else {
    //   info = round.roundDizzy();
    // }
    console.log(info);

    if(player.hp <= 0 || soldier.hp <= 0) {
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
