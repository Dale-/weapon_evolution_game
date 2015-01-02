function Weapon(name, natureValue, skill) {
  this.name = name;
  this.natureValue = natureValue;
  this.skill = skill;
}

Weapon.all = function() {
  return [
          new Weapon('利剑', 3, '致命一击'),
          new Weapon('火焰剑', 2, '火焰'),
          new Weapon('晕锤', 4, '击晕'),
          new Weapon('寒冰剑', 4, '冰冻'),
          new Weapon('优质毒剑', 4, '毒性'),
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

// Weapon.prototype.getAttackValue = function() {
//
//   switch(this.characters[0]) {
//     case '致命一击' : {
//                       this.attackValue += this.value;
//                       this.attackValue *= 3;
//                       break;
//                      }
//   }
//   return this.attackValue;
// };

module.exports = Weapon;
