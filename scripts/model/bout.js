function Bout(player, soldier) {
  this.player = player;
  this.soldier = soldier;
  this.times = 1;
}

Bout.prototype.getSoldierAP = function() {
  return this.soldier.attackPoint;
};

Bout.prototype.getPlayerHP = function() {
  return this.player.hp;
};

Bout.prototype.getSoldierName = function() {
  return this.soldier.name;
};

Bout.prototype.getPlayerName = function() {
  return this.player.name;
};

Bout.prototype.getWeaponName = function() {
  return this.soldier.getWeaponName();
};

Bout.prototype.boutBlood = function() {
  var info = '';

  if(this.times === 1){

    var value = this.getSoldierAP() + this.soldier.getWeaponAP();
    this.player.hp -= (this.getSoldierAP() + this.soldier.getWeaponAP());

    info += '战士' + this.getSoldierName() + '用' + this.getWeaponName() +
            '攻击了普通人' + this.getPlayerName() + '，' +
            this.getPlayerName() + '受到了' + value + '点伤害，' +
            this.getPlayerName() + this.soldier.weapon.getSkillInfo() +
            this.getPlayerName() + '剩余生命：' + this.getPlayerHP() + '\n';

    this.player.hp -= this.soldier.weapon.getSkillBlood() ;

    info += this.player.name + '受到' +
            this.soldier.weapon.getSkillBlood() + '点' +
            this.soldier.weapon.getSkillName() + '伤害,' +
            this.player.name + '剩余生命：' + this.player.hp;
  } else {

  }
  return info;
};

module.exports = Bout;
