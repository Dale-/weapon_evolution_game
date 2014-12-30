function Player(name, hp, attackValue) {
  this.name = name;
  this.hp = hp;
  this.attackValue = attackValue;
}

Player.prototype.attackPoint = function(player) {
  player.hp -= this.attackValue;
  return player.hp;
};

module.exports = Player;
