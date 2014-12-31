var Weapon = require('./weapon.js');
var DefenseTool = require('./defense-tool.js');

function Player(name, hp, attackValue) {
  this.name = name;
  this.hp = hp;
  this.attackValue = attackValue;
}

Player.prototype.attack = function(player) {

  player.hp -= this.attackValue;

  return player.hp;
};

module.exports = Player;
