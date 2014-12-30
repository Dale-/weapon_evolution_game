var _ = require('lodash');
var Player = require('./player');
var Weapon = require('./weapon');
var DefenseTool = require('./defense-tool');

function Soldier(name, hp, attackValue, weapon,defenseTool) {
  Player.call(this, name, hp, attackValue);
  this.weapon = weapon;
  this.defenseTool = defenseTool;
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.getAttackValue = function() {
  var myWeapon = _.find(Weapon.all(),{ 'name': this.weapon});
  this.attackValue += myWeapon.attackValue;
};

Soldier.prototype.getHp = function() {
  var myDefenseTool = _.find(DefenseTool.all(),{ 'name': this.defenseTool});
  this.hp += myDefenseTool.attackValue;
};

module.exports = Soldier;
