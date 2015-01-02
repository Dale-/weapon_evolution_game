var Player = require('./player.js');

function CommonPeople(name, hp, attackPoint) {
  Player.call(this, name, hp, attackPoint);
}

CommonPeople.prototype = Object.create(Player.prototype);
CommonPeople.prototype.constructor = CommonPeople;

CommonPeople.prototype.attack = function(soldier) {
  
  soldier.hp -= this.attackPoint;
  var info = '//' + this.name + '进攻';

  return info;
};

module.exports = CommonPeople;
