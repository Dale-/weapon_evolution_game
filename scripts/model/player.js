var Weapon = require('./weapon.js');
var DefenseTool = require('./defense-tool.js');

function Player(name, hp, attackValue) {
  this.name = name;
  this.hp = hp;
  this.attackValue = attackValue;
}

Player.prototype.attackPoint = function(player) {

  player.hp -= this.attackValue;

  var weaponText = '';
  if(this.weapon !== '') {
    weaponText = '用' + this.weapon;
  }

  var defenseToolText = '';
  if(soldier.defenseTool !== '') {
    defenseToolText = '用' + soldier.defenseTool + '防御';
  }

  var info = this.name + '攻击了' + player.name + ' , ' +
             player.name + defenseToolText + '受到了' +
             (this.attackValue - player.defenseValue) + '点伤害 ' +
             player.name +'剩余生命值：' + player.hp + '\n\n';
  return info;
};

module.exports = Player;
