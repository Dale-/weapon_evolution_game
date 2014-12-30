var Player = require('./player');
var _ = require('lodash');

function Soldier(name, hp, attackValue, weapon) {
  Player.call(this, name, hp, attackValue);
  this.weapon = weapon;
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.getAttackValue = function() {
  var myWeapon = _.find(Weapon.all(),function(weapon) {
    return weapon.name === this.weapon;
  });
  this.attackValue += myWeapon.attackValue;
};

module.exports = Soldier;
