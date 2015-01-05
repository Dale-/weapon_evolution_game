var _ = require('lodash');
var Skill = require('./skill.js');

function Round(player, soldier) {
  this.player = player;
  this.soldier = soldier;
  this.dizzyTimes = -1;
  this.frozenTimes = [];
  this.fireTimes = 0;
  this.poisonTimes = 0;
}

Round.prototype.round = function(skillName) {
  var info = '';

  if(this.frozenTimes !== null) {
    this.frozenTimes = _.map(this.frozenTimes,
      function(num) { return num + 1; });
  }

  var playerJumpBlood = this.soldier.attack(this.player);

  if(skillName !== '') {

    if(skillName === '毒性') {
      this.addPoisonTimes();
      this.initEffectTimes(this.poisonTimes, [], 0, -1);

    } else {
      this.reducePoisonTimes();
    }

    if(skillName === '火焰') {
      this.addFireTimes();
      this.initEffectTimes(0, [], this.fireTimes, -1);

    } else {
      this.reduceFireTimes();
    }

    if(skillName === '冰冻') {
      this.frozenTimes.unshift(1);
      this.initEffectTimes(0, this.frozenTimes, 0, -1);
    }

    if(skillName === '击晕') {
      this.dizzyTimes = this.dizzyTimes <= 0 ? 1 : this.dizzyTimes + 1 ;
      this.initEffectTimes(0, [], 0, this.dizzyTimes);

    } else {
      if(this.dizzyTimes > -1) { this.dizzyTimes --; }
    }

    if(skillName === '致命一击') {
      this.player.hp -= 2 * playerJumpBlood;
      playerJumpBlood *= 3;
    }
    info += this.soldier.attackText(this.player, skillName, playerJumpBlood);

  } else {
    info += '//' + this.getSoldierName() + '进攻\n';

    this.reducePoisonTimes();
    this.reduceFireTimes();

    if(this.dizzyTimes > -1) { this.dizzyTimes --; }
  }
  if(this.poisonTimes > 0) {
    info += this.printPoisonHurt();
  }

  if(this.fireTimes > 0) {
    info += this.printFireHurt();
  }

  if(this.player.isDiedText() !== ''){
    info += this.player.isDiedText();
    return info;
  }

  if(this.frozenTimes !== null &&
     this.frozenTimes[this.frozenTimes.length - 1] === 3) {

      info += this.printFrozenText();

    } else if(this.dizzyTimes >= 0) {

      info += this.printDizzyText();

    } else {
      info += this.player.attack(this.soldier);
    }

    if(this.soldier.isDiedText() !== ''){
      info += this.soldier.isDiedText();
      return info;
    }

  return info;
};

Round.prototype.initEffectTimes = function(poison, frozen, fire, dizzy) {

  this.fireTimes = fire;
  this.dizzyTimes = dizzy;
  this.poisonTimes = poison;
  this.frozenTimes = frozen;
};

Round.prototype.printFrozenText = function() {

  this.frozenTimes.pop();

  return this.getPlayerName() + '冻得直哆嗦，没有击中' +
         this.getSoldierName() + '\n';
};

Round.prototype.printDizzyText = function() {

  return this.getPlayerName() +'晕倒了，无法攻击, 眩晕还剩：' +
         this.dizzyTimes + '轮\n';
};

Round.prototype.printPoisonHurt = function() {

  var poisonHurtValue = Skill.all()[0].blood;
  this.player.hp -= poisonHurtValue;

  if(this.poisonTimes === 3) {

    poisonHurtValue *= 2;
    this.poisonTimes --;
  }

  return this.getPlayerName() + '受到' + poisonHurtValue + '点' +
         Skill.all()[0].name + '伤害,' + this.getPlayerName() +
         '剩余生命：' + this.getPlayerHP() + '\n';
};

Round.prototype.printFireHurt = function() {

  var fireHurtValue = Skill.all()[1].blood;
  this.player.hp -= fireHurtValue;

  if(this.fireTimes === 3) {

    fireHurtValue *= 2;
    this.fireTimes --;
  }

  return this.getPlayerName() + '受到' + fireHurtValue + '点' +
         Skill.all()[1].name + '伤害,' + this.getPlayerName() +
         '剩余生命：' + this.getPlayerHP() + '\n';
};

Round.prototype.addPoisonTimes = function() {
  this.poisonTimes = this.poisonTimes >= 1 ?
                     this.poisonTimes + 1: this.poisonTimes + 2;
};

Round.prototype.reducePoisonTimes = function() {
  this.poisonTimes = this.poisonTimes > 0 ?
                     this.poisonTimes - 1: this.poisonTimes;
};

Round.prototype.addFireTimes = function() {
  this.fireTimes = this.fireTimes >= 1 ?
                   this.fireTimes + 1: this.fireTimes + 2;
};

Round.prototype.reduceFireTimes = function() {
  this.fireTimes = this.fireTimes > 0 ?
                   this.fireTimes - 1: this.fireTimes;
};

Round.prototype.getSoldierAP = function() {
  return this.soldier.attackPoint;
};

Round.prototype.getPlayerAP = function() {
  return this.player.attackPoint;
};

Round.prototype.getPlayerHP = function() {
  return this.player.hp;
};

Round.prototype.getSoldierHP = function() {
  return this.soldier.hp;
};

Round.prototype.getSoldierName = function() {
  return this.soldier.name;
};

Round.prototype.getPlayerName = function() {
  return this.player.name;
};

Round.prototype.getSoldierWeaponName = function() {
  return this.soldier.getWeaponName();
};

Round.prototype.getSoldierWeaponAp = function() {
  return this.soldier.getWeaponAP();
};

Round.prototype.getSoldierWeaponSkillInfo = function() {
  return this.soldier.getWeaponSkillInfo();
};

Round.prototype.getSoldierWeaponSkillName = function() {
  return this.soldier.getWeaponSkillName();
};

Round.prototype.getSoldierWeaponSkillBlood = function() {
  return this.soldier.getWeaponSkillBlood();
};

module.exports = Round;
