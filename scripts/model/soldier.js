var Player = require('./player');

function Soldier(name, hp, attackValue, weapon) {
  Player.call(this, name, hp, attackValue);
  this.weapon = weapon;
  // this.attackValue
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

module.exports = Soldier;
