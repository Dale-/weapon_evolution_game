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

Bout.prototype.getSoldierWeaponName = function() {
  return this.soldier.getWeaponName();
};

Bout.prototype.getSoldierWeaponSkillInfo = function() {
  return this.soldier.getWeaponSkillInfo();
};

Bout.prototype.getSoldierWeaponSkillName = function() {
  return this.soldier.getWeaponSkillName();
};

Bout.prototype.getSoldierWeaponSkillBlood = function() {
  return this.soldier.getWeaponSkillBlood();
};

Bout.prototype.boutBlood = function() {
  var info = '';



  var value = this.getSoldierAP() + this.soldier.getWeaponAP();
  this.player.hp -= (this.getSoldierAP() + this.soldier.getWeaponAP());

  if(this.times === 1){

    info += '战士' + this.getSoldierName() + '用' + this.getSoldierWeaponName() +
            '攻击了普通人' + this.getPlayerName() + '，' +
            this.getPlayerName() + '受到了' + value + '点伤害，' +
            this.getPlayerName() + this.getSoldierWeaponSkillInfo() +
            this.getPlayerName() + '剩余生命：' + this.getPlayerHP() + '\n';
  }

  this.player.hp -= this.getSoldierWeaponSkillBlood() ;

  info += this.getPlayerName() + '受到' +
          this.getSoldierWeaponSkillBlood() + '点' +
          this.getSoldierWeaponSkillName() + '伤害,' +
          this.getPlayerName() + '剩余生命：' + this.getPlayerHP() + '\n';

  this.soldier.hp -= this.getPlayerHP();
  info += '//' + this.getPlayerName() + '进攻\n';

  return info;
};

module.exports = Bout;
