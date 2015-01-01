var Player = require('./player.js');

function CommonPeople(name, hp, attackPoint) {
  Player.call(this, name, hp, attackPoint);
}

CommonPeople.prototype = Object.create(Player.prototype);
CommonPeople.prototype.constructor = CommonPeople;

CommonPeople.prototype.attack = function(soldier) {

  soldier.hp -= this.attackPoint;
  return '//' + this.name + '进攻';
};

module.exports = CommonPeople;
