var _ = require('lodash');
var Player = require('./player.js');
var Weapon = require('./weapon.js');
var Skill = require('./skill.js');

function Soldier(name, hp, attackValue, weaponName) {
  Player.call(this, name, hp, attackValue);
  this.weaponName = weaponName;
  // this.character = character;
  // this.defenseTool = defenseTool;
  // this.defenseValue = 0;
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.attack = function(commonPeople) {

  var info = '';

  // commonPeople.hp -= this.attackValue;
  //
  // var characterText = '';
  // if(this.character !== '') {
  //   characterText = this.name + '发动了' + this.character;
  // }
  //
  // var weaponText = '';
  // if(this.weapon !== '') {
  //   weaponText = '用' + this.weapon;
  // }
  //
  // var info = this.name + weaponText + '攻击了' + commonPeople.name + ' , ' +
  //            characterText + commonPeople.name + '受到了' +
  //            (this.attackValue ) + '点伤害 ' +
  //            commonPeople.name +'剩余生命值：' + commonPeople.hp + '\n\n';

  var weapons = Weapon.all();
  var weapon;
  for(var i = 0; i < weapons.length; i++) {
    if(weapons[i].name === this.weaponName) {
      weapon = weapons[i];
    }
  }

  var skills = Skill.all();
  var skill;
  for(var x = 0; x < skills.length; x++) {
    if(skills[x].name === weapon.skill ) {
      skill = skills[x];
    }
  }
  console.log(skills);
  var value = this.attackValue + weapon.natureValue;
  if(weapon.skill === '毒性' || weapon.skill === '火焰') {

    info = '战士' + this.name + '用' + weapon.name + '攻击了普通人' +
           commonPeople.name + ',' + commonPeople.name + '受到了' +
           value + '点伤害' + commonPeople.name +
           '剩余生命：' + (commonPeople.attackValue - value);

    commonPeople.attackValue -= (value + skillBlood) ;


  } else if(weapon.skill === '致命一击') {

  } else {

  }

  return info;
};

// Soldier.prototype.getAttackValue = function() {
//   console.log(this.weapon);
//   var myWeapon = _.find(Weapon.all(),{ 'name': this.weapon});
//   this.attackValue += myWeapon.attackValue;
// };

// Soldier.prototype.getHp = function() {
//   console.log(this.defenseTool);
//   var myDefenseTool = _.find(DefenseTool.all(),{ 'name': this.defenseTool});
//   this.hp += myDefenseTool.attackValue;
//   this.defenseValue = myDefenseTool.attackValue;
// };

module.exports = Soldier;
