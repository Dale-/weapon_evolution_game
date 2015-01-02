var Weapon = require('./weapon.js');
var DefenseTool = require('./defense-tool.js');

function Player(name, hp, attackPoint) {
  this.name = name;
  this.hp = hp;
  this.attackPoint = attackPoint;
}

Player.prototype.attack = function(player) {

  player.hp -= this.attackValue;

  return player.hp;
};

module.exports = Player;
