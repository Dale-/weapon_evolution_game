function Fight() {
}

Fight.fight = function(soldier, commonPeople) {

  var defenseToolText = '';
  if(soldier.defenseTool !== '') {
    defenseToolText = '用' + soldier.defenseTool + '防御';
  }
  var info = '';

  while(true) {
    info += soldier.attackPoint(commonPeople);
    if(commonPeople.hp <= 0) {
      info += 'Stefan fail\n\n';
      break;
    }

    soldier.getHp();
    info += commonPeople.attackPoint(soldier);

    // info += commonPeople.name + '攻击了' + soldier.name + ' , ' +
    //         soldier.name + defenseToolText + '受到了' +
    //         (commonPeople.attackValue - soldier.defenseValue) + '点伤害 ' +
    //         soldier.name +'剩余生命值：' + soldier.hp + '\n\n';
    if(soldier.hp <= 0) {
      info += 'Damon fail\n\n';
      break;
    }
  }
  console.log(info);
};

module.exports = Fight;
