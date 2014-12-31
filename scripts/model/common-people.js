var Player = require('./player');

function CommonPeople(name, hp, attackValue) {
  Player.call(this, name, hp, attackValue);
  this.name = '普通人' + this.name;
}

CommonPeople.prototype = Object.create(Player.prototype);
CommonPeople.prototype.constructor = CommonPeople;

module.exports = CommonPeople;
