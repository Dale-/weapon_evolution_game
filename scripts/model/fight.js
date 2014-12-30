function Fight() {
}

Fight.fight = function(soldier, commonPeople) {

  var weaponText = '';
  if(soldier.weapon !== '') {
    weaponText = '用' + soldier.weapon;
  }
  var defenseToolText = '';
  if(soldier.defenseTool !== '') {
    defenseToolText = '用' + soldier.defenseTool + '防御';
  }
  var info = '';

  while(true) {
    soldier.attackPoint(commonPeople);
    info += soldier.name + weaponText + '攻击了' +
            commonPeople.name + ' , ' +
            commonPeople.name + '受到了' + soldier.attackValue + '点伤害 ' +
            commonPeople.name +'剩余生命值：' + commonPeople.hp + '\n\n';
    if(commonPeople.hp <= 0) {
      info += 'Stefan fail\n\n';
      break;
    }

    commonPeople.attackPoint(soldier);
    soldier.getHp();
    info += commonPeople.name + '攻击了' + soldier.name + ' , ' +
            soldier.name + defenseToolText + '受到了' +
            (commonPeople.attackValue - soldier.defenseValue) + '点伤害 ' +
            soldier.name +'剩余生命值：' + soldier.hp + '\n\n';
    if(soldier.hp <= 0) {
      info += 'Damon fail\n\n';
      break;
    }
  }
  console.log(info);
};

module.exports = Fight;
