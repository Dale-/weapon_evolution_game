var _ = require('lodash');
var Skill = require('./skill.js');
var Player = require('./player.js');
var Weapon = require('./weapon.js');


function Soldier(name, hp, attackPoint, weapon) {
  Player.call(this, name, hp, attackPoint);
  this.weapon = weapon;
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.getWeaponAP = function() {
  return this.weapon.attackPoint;
};

Soldier.prototype.getWeaponName = function() {
  return this.weapon.name;
};

Soldier.prototype.getWeaponSkill = function() {
  return this.weapon.skill;
};

Soldier.prototype.getWeaponSkillInfo = function() {
  return this.weapon.getSkillInfo();
};

Soldier.prototype.getWeaponSkillName = function() {
  return this.weapon.getSkillName();
};

Soldier.prototype.getWeaponSkillBlood = function() {
  return this.weapon.getSkillBlood();
};

Soldier.prototype.attack = function(commonPeople) {

  var info ='';

  var value = this.attackPoint + this.weapon.attackPoint;
  commonPeople.hp -= (this.attackPoint + this.weapon.attackPoint);

  //console.log(this.name);
  if(this.weapon.skill.name === '毒性' || this.weapon.skill.name === '火焰') {

    info += '战士' + this.name + '用' + this.weapon.name +
            '攻击了普通人' + commonPeople.name + '，' +
            commonPeople.name + '受到了' + value + '点伤害，' +
            commonPeople.name + this.weapon.getSkillInfo() +
            commonPeople.name + '剩余生命：' + commonPeople.hp + '\n';

    commonPeople.hp -= this.weapon.getSkillBlood() ;

    info += commonPeople.name + '受到' +
            this.weapon.getSkillBlood() + '点' +
            this.weapon.getSkillName() + '伤害,' +
            commonPeople.name + '剩余生命：' + commonPeople.hp;

  } else if(this.weapon.skill.name === '致命一击') {

  } else {

  }
  return info;
};

// Soldier.prototype.getWeaponSkillInfo = function() {
//   this.weapon.getSkillInfo();
//   return this.weapon.getSkillInfo();
// };



// Soldier.prototype.getHp = function() {
//   console.log(this.defenseTool);
//   var myDefenseTool = _.find(DefenseTool.all(),{ 'name': this.defenseTool});
//   this.hp += myDefenseTool.attackValue;
//   this.defenseValue = myDefenseTool.attackValue;
// };

module.exports = Soldier;
