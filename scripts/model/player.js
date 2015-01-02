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

module.exports = Player;
