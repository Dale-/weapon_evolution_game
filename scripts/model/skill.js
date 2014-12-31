function Skill(name, type, probability) {
  this.name = name;
  this.type = type;
  this.probability = probability;
}

Skill.all = function() {
  return [
          new Skill('毒性',times, 0.2),
          new Skill('火焰',times, 0.2),
          new Skill('冰冻',blood, 0.2),
          new Skill('击晕',blood, 0.2),
          new Skill('致命一击',injury, 0.2)
         ];
};
