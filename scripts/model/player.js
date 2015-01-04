var Weapon = require('./weapon.js');
var DefenseTool = require('./defense-tool.js');

function Player(name, hp, attackPoint) {
  this.name = name;
  this.hp = hp;
  this.attackPoint = attackPoint;
}

Player.prototype.attack = function(soldier) {

  soldier.hp -= this.attackPoint;
  return '//' + this.name + '进攻';
};

Player.prototype.isDiedText = function() {
  if(this.hp <= 0) {
    return '\n' + this.name + '被打死了';
  } else {
    return '';
  }
};

module.exports = Player;
