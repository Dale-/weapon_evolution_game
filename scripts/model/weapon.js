function Weapon(name, nature, skills) {
  this.name = name;
  this.nature = nature;
  this.skills = skills;
}

Weapon.all = function() {
  return [
          new Weapon('匕首', 3, ['致命一击']),
          new Weapon('凌风', 2, ['火焰']),
          new Weapon('魔杖', 4, ['击晕']),
          new Weapon('凝霜', 4, ['冰冻']),
          new Weapon('血饮', 4, ['毒性']),
         ];
};

Weapon.prototype.getAttackValue = function() {

  switch(this.characters[0]) {
    case '致命一击' : {
                      this.attackValue += this.value;
                      this.attackValue *= 3;
                      break;
                     }
  }
  return this.attackValue;
};

module.exports = Weapon;
