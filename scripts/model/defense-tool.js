function DefenseTool(name, attackValue) {
  this.name = name;
  this.attackValue = attackValue;
}

DefenseTool.all = function() {
  return [
          new DefenseTool('人血',2),
          new DefenseTool('血袋',1)
         ];
};

module.exports = DefenseTool;
