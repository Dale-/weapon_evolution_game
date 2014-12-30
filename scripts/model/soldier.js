var _ = require('lodash');
var Player = require('./player');
var Weapon = require('./weapon');

function Soldier(name, hp, attackValue, weapon) {
  Player.call(this, name, hp, attackValue);
  this.weapon = weapon;
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.getAttackValue = function() {
  var myWeapon = _.find(Weapon.all(),{ 'name': '马鞭草'});
  this.attackValue += myWeapon.attackValue;
};

module.exports = Soldier;
