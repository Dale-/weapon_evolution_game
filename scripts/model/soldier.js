var _ = require('lodash');
var Player = require('./player.js');
var Weapon = require('./weapon.js');
var DefenseTool = require('./defense-tool.js');

function Soldier(name, hp, attackValue, weapon) {
  Player.call(this, name, hp, attackValue);
  this.name = '战士' + name;
  this.weapon = weapon;
  // this.character = character;
  // this.defenseTool = defenseTool;
  // this.defenseValue = 0;
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.attack = function(commonPeople) {

  commonPeople.hp -= this.attackValue;

  var characterText = '';
  if(this.character !== '') {
    characterText = this.name + '发动了' + this.character;
  }

  var weaponText = '';
  if(this.weapon !== '') {
    weaponText = '用' + this.weapon;
  }

  var info = this.name + weaponText + '攻击了' + commonPeople.name + ' , ' +
             characterText + commonPeople.name + '受到了' +
             (this.attackValue ) + '点伤害 ' +
             commonPeople.name +'剩余生命值：' + commonPeople.hp + '\n\n';

  return info;
};

Soldier.prototype.getAttackValue = function() {
  console.log(this.weapon);
  var myWeapon = _.find(Weapon.all(),{ 'name': this.weapon});
  this.attackValue += myWeapon.attackValue;
};

// Soldier.prototype.getHp = function() {
//   console.log(this.defenseTool);
//   var myDefenseTool = _.find(DefenseTool.all(),{ 'name': this.defenseTool});
//   this.hp += myDefenseTool.attackValue;
//   this.defenseValue = myDefenseTool.attackValue;
// };

module.exports = Soldier;
