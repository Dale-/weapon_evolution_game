var _ = require('lodash');
var Player = require('./player.js');
var Weapon = require('./weapon.js');
var DefenseTool = require('./defense-tool.js');

function Soldier(name, hp, attackValue, weapon,defenseTool) {
  Player.call(this, name, hp, attackValue);
  this.name = '战士' + this.name;
  this.weapon = weapon;
  this.defenseTool = defenseTool;
  this.defenseValue = 0;
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.attackPoint = function(commonPeople) {

  commonPeople.hp -= this.attackValue;

  var weaponText = '';
  if(this.weapon !== '') {
    weaponText = '用' + this.weapon;
  }

  var defenseToolText = '';
  if(this.defenseTool !== '') {
    defenseToolText = '用' + this.defenseTool + '防御';
  }

  var info = this.name + '攻击了' + commonPeople.name + ' , ' +
  commonPeople.name + defenseToolText + '受到了' +
  (this.attackValue - commonPeople.defenseValue) + '点伤害 ' +
  commonPeople.name +'剩余生命值：' + commonPeople.hp + '\n\n';

  return info;
};

Soldier.prototype.getAttackValue = function() {
  var myWeapon = _.find(Weapon.all(),{ 'name': this.weapon});
  this.attackValue += myWeapon.attackValue;
};

Soldier.prototype.getHp = function() {
  var myDefenseTool = _.find(DefenseTool.all(),{ 'name': this.defenseTool});
  this.hp += myDefenseTool.attackValue;
  this.defenseValue = myDefenseTool.attackValue;
};

module.exports = Soldier;
