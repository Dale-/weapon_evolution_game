function DefenseToll(name, attackValue) {
  this.name = name;
  this.attackValue = attackValue;
}

DefenseToll.all = function() {
  return [
  new Weapon('人血',2),
  new Weapon('血袋',1)
  ];
};

module.exports = DefenseToll;
