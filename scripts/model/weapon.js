var Skill = require('./skill.js');

function Weapon(name, attackPoint, skills) {
  this.name = name;
  this.attackPoint = attackPoint;
  this.skills = skills || [];
}

Weapon.all = function() {
  var skills = Skill.all();
  return [
          new Weapon('晕锤', 4, [skills[3], skills[0]]),
          new Weapon('火焰剑', 2, [skills[1], skills[4]]),
          new Weapon('优质毒剑', 4, [skills[0], skills[4]]),
          new Weapon('利剑', 3, [skills[4], skills[0]], skills[1]),
          new Weapon('寒冰剑', 4, [skills[2], skills[4], skills[0]])
         ];
};

Weapon.prototype.getSkillInfo = function() {
  return this.skill.info;
};

Weapon.prototype.getSkillTimes = function() {
  return this.skill.times;
};

Weapon.prototype.getSkillBlood = function() {
  return this.skill.blood;
};

Weapon.prototype.getSkillName = function() {
  return this.skill.name;
};

module.exports = Weapon;
