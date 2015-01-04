var _ = require('lodash');
var Skill = require('./skill.js');

function Round(player, soldier) {
  this.player = player;
  this.soldier = soldier;
  this.times = 1;
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

  var value = this.getSoldierAP() + this.getSoldierWeaponAp();
  this.player.hp -= value;

  if(skillName !== '') {

    if(skillName === '毒性') {
      this.poisonTimes += 2;

    } else if(skillName === '火焰') {
      this.fireTimes += 2;

    } else if(skillName === '冰冻') {
      this.frozenTimes.unshift(1);

    } else if(skillName === '击晕') {
      this.dizzyTimes = this.dizzyTimes <= 0 ? 1 : this.dizzyTimes + 1 ;

    } else if(skillName === '致命一击') {
      this.player.hp -= 2*value;
      value *= 3;
    }

    info += this.soldier.attackText(this.player, skillName, value);

  } else {
    info += '//' + this.getSoldierName() + '进攻\n';

    this.poisonTimes = this.poisonTimes > 0 ?
                       this.poisonTimes - 1 : this.poisonTimes;

    this.fireTimes = this.fireTimes > 0 ?
                     this.fireTimes-1 : this.fireTimes;

    if(this.dizzyTimes > -1) { this.dizzyTimes --; }
  }

  if(this.getPlayerHP() <= 0) {
    info += '\n' + this.getPlayerName() + '被打死了';
    return info;
  }

  if(this.poisonTimes > 0) {
    this.player.hp -= Skill.all()[0].blood ;

    info += this.getPlayerName() + '受到' +
            Skill.all()[0].blood + '点' +
            Skill.all()[0].name + '伤害,' +
            this.getPlayerName() + '剩余生命：' +
            this.getPlayerHP() + '\n';
  }

  if(this.fireTimes > 0) {
    this.player.hp -= Skill.all()[1].blood ;

    info += this.getPlayerName() + '受到' +
            Skill.all()[1].blood + '点' +
            Skill.all()[1].name + '伤害,' +
            this.getPlayerName() + '剩余生命：' +
            this.getPlayerHP() + '\n';
  }

  if(this.frozenTimes !== null &&
    this.frozenTimes[this.frozenTimes.length - 1] === 3) {

      info += this.getPlayerName() + '冻得直哆嗦，没有击中' +
      this.getSoldierName() + '\n';
      this.frozenTimes.pop();

    } else if(this.dizzyTimes >= 0) {

      info += this.getPlayerName() +'晕倒了，无法攻击, 眩晕还剩：' +
      this.dizzyTimes + '轮\n';

    } else {
      this.soldier.hp -= this.getPlayerAP();
      info += '//' + this.getPlayerName() + '进攻\n';
    }

  if(this.getSoldierHP() <= 0) {
    info += '\n' + this.getSoldierName() + '被打死了';
    return info;
  }

  return info;
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
