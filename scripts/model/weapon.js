function Weapon(name, characters, attackValue) {
  this.name = name;
  this.characters = characters;
  this.attackValue = attackValue;
}

Weapon.all = function() {
  return [
          new Weapon('利剑', ['致命一击']),
          new Weapon('阳光',3)
         ];
};

Weapon.prototype.getAttackValue = function() {

  switch(this.characters[0]) {
    case '致命一击' : {
                      this.attackValue *= 3;
                      break;
                     }
  }
  return this.attackValue;
};

module.exports = Weapon;
