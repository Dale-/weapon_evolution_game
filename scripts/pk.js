var _ = require('lodash');
var Round = require('./model/round');
var Skill = require('./model/skill');
var Weapon = require('./model/weapon');
var Player = require('./model/player');
var Soldier = require('./model/soldier');
var Random = require('./model/random');



(function PK() {

  var info = '';
  var weapon = Weapon.all()[Random.weapon()];
  var player = new Player('李四', 100, 10);
  var soldier = new Soldier('张三', 100, 2, weapon);
  var round = new Round(player, soldier);

  while(true) {

    var skillName = Random.skillName(weapon);

    info = round.round(skillName);
    console.log(info);

    if(player.hp <= 0 || soldier.hp <= 0) {
      break;
    }
  }

})();
