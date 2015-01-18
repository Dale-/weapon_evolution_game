var Skill = require('./skill.js');

function Weapon(name, attackPoint, skills) {
  this.name = name;
  this.attackPoint = attackPoint;
  this.skills = skills || [];
}

Weapon.all = function() {
  return [
          new Weapon('晕锤', 4, [Skill.all()[3], Skill.all()[0]]),
          new Weapon('火焰剑', 2, [Skill.all()[1], Skill.all()[4]]),
          new Weapon('优质毒剑', 4, [Skill.all()[0], Skill.all()[4]]),
          new Weapon('利剑', 3, [Skill.all()[4], Skill.all()[0]], Skill.all()[1]),
          new Weapon('寒冰剑', 4, [Skill.all()[2], Skill.all()[4], Skill.all()[0]])
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
