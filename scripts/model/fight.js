function Fight() {
}

Fight.fight = function(soldier, commonPeople) {

  var weaponText = '';
  if(soldier.weapon !== '') {
    weaponText = '用' + soldier.weapon;
  }

  while(true) {
    soldier.attackPoint(commonPeople);
    console.log(soldier.name + weaponText + '攻击了' +
                commonPeople.name + ' , ' +
                commonPeople.name + '受到了' + soldier.attackValue + '点伤害 ' +
                commonPeople.name +'剩余生命值：' + commonPeople.hp);
    if(commonPeople.hp <= 0) {
      console.log('Stefan fail');
      break;
    }

    commonPeople.attackPoint(soldier);
    console.log(commonPeople.name + '攻击了' + soldier.name + ' , ' +
                soldier.name + '受到了' + commonPeople.attackValue + '点伤害 ' +
                soldier.name +'剩余生命值：' + soldier.hp);
    if(soldier.hp <= 0) {
      console.log('Damon fail');
      break;
    }
  }
};

module.exports = Fight;
