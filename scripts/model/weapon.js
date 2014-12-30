function Weapon(name, attackValue) {
  this.name = name;
  this.attackValue = attackValue;
}

Weapon.all = function() {
  return [
          new Weapon('马鞭草',2),
          new Weapon('阳光',3)
         ];
};

module.exports = Weapon;
