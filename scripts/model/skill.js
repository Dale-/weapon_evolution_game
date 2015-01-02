function Skill(name, times, blood, info, probability) {
  this.name = name;
  this.times = times;
  this.blood = blood;
  this.info = info;
  this.probability = probability;
}

Skill.all = function() {
  return [
          new Skill('毒性', 0, 2, '中毒了，', 0.2),
          new Skill('火焰', 0, 1, '着火了，', 0.4),
          new Skill('冰冻', 2, 0, '冻僵了，', 0.6),
          new Skill('击晕', 2, 0, '晕倒了，', 0.8),
          new Skill('致命一击', 0, 0, '发动了致命一击，', 0.9)
         ];
};

module.exports = Skill;
