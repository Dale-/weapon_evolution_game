var Player = require('./player');

function Soldier(name, hp, attackValue) {
  Player.call(this, name, hp, attackValue);
}

Soldier.prototype = Object.create(Player.prototype);

Soldier.prototype.constructor = Soldier;

module.exports = Soldier;
