var Player = require('./player.js');

function CommonPeople(name, hp, attackPoint) {
  Player.call(this, name, hp, attackPoint);
}

CommonPeople.prototype = Object.create(Player.prototype);
CommonPeople.prototype.constructor = CommonPeople;

CommonPeople.prototype.attack = function(soldier) {
  soldier.hp -= this.attackPoint;

  var info = this.name + '攻击了' + soldier.name + ' , ' +
             soldier.name  + '受到了' +
             (this.attackPoint - soldier.defenseValue) + '点伤害 ' +
             soldier.name +'剩余生命值：' + soldier.hp + '\n\n';

  return info;
};

CommonPeople.prototype.attackText = function(soldier) {
  soldier.hp -= this.attackValue;

  var info = this.name + '攻击了' + soldier.name + ' , ' +
  soldier.name  + '受到了' +
  (this.attackValue - soldier.defenseValue) + '点伤害 ' +
  soldier.name +'剩余生命值：' + soldier.hp + '\n\n';

  return info;
};

module.exports = CommonPeople;
