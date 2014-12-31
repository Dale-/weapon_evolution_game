var Player = require('./player.js');

function CommonPeople(name, hp, attackValue) {
  Player.call(this, name, hp, attackValue);
  this.name = '普通人' + this.name;
}

CommonPeople.prototype = Object.create(Player.prototype);
CommonPeople.prototype.constructor = CommonPeople;

CommonPeople.prototype.attackPoint = function(soldier) {
  soldier.hp -= this.attackValue;

  var info = this.name + '攻击了' + soldier.name + ' , ' +
  soldier.name  + '受到了' +
  (this.attackValue - soldier.defenseValue) + '点伤害 ' +
  soldier.name +'剩余生命值：' + soldier.hp + '\n\n';

  return info;
};

module.exports = CommonPeople;
