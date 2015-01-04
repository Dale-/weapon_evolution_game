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

Soldier.prototype.attack = function(player) {
  
  var playerJumpBlood = this.attackPoint + this.getWeaponAP();
  player.hp -= playerJumpBlood;

  return playerJumpBlood;
};

Soldier.prototype.attackText = function(commonPeople, skillName, value) {

  var info ='';
  var skill = _.find(Skill.all(), { name: skillName });

  info = '战士' + this.name + '用' + this.getWeaponName() +
         '攻击了普通人' + commonPeople.name + '，' +
         commonPeople.name + '受到了' + value + '点伤害，' +
         commonPeople.name + skill.info +
         commonPeople.name + '剩余生命：' + commonPeople.hp + '\n';

  return info;
};

Soldier.prototype.isDiedText = function() {
  if(this.hp <= 0) {
    return '\n' + this.name + '被打死了';
  } else {
    return '';
  }
};

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

module.exports = Soldier;
