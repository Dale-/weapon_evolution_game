function Bout(player, soldier) {
  this.player = player;
  this.soldier = soldier;
  this.times = 1;
}

Bout.prototype.boutBlood = function() {
  var info = '';

  if(this.times === 1){

    var value = this.soldier.attackPoint + this.soldier.weapon.attackPoint;
    this.player.hp -=
         (this.soldier.attackPoint + this.soldier.getWeaponAP());

    info += '战士' + this.soldier.name + '用' + this.soldier.weapon.name +
            '攻击了普通人' + this.player.name + '，' +
            this.player.name + '受到了' + value + '点伤害，' +
            this.player.name + this.soldier.weapon.getSkillInfo() +
            this.player.name + '剩余生命：' + this.player.hp + '\n';

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
