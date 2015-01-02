function Bout(player, soldier) {
  this.player = player;
  this.soldier = soldier;
  this.times = 1;
}

Bout.prototype.boutBlood = function() {
  if(times === 1){
    var value = this.soldier.attackPoint + this.soldier.weapon.attackPoint;
    player.hp -= (this.soldier.attackPoint + this.soldier.weapon.attackPoint);

    info += '战士' + this.soldier.name + '用' + this.soldier.weapon.name +
    '攻击了普通人' + player.name + '，' +
    player.name + '受到了' + value + '点伤害，' +
    player.name + this.soldier.weapon.getSkillInfo() +
    player.name + '剩余生命：' + player.hp + '\n';

    player.hp -= this.soldier.weapon.getSkillBlood() ;

    info += player.name + '受到' +
    this.soldier.weapon.getSkillBlood() + '点' +
    this.soldier.weapon.getSkillName() + '伤害,' +
    player.name + '剩余生命：' + player.hp;
  } else {

  }
  return info;
};
