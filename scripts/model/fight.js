function Fight() {
}

Fight.fight = function(soldier, commonPeople) {

  var defenseToolText = '';
  if(soldier.defenseTool !== '') {
    defenseToolText = '用' + soldier.defenseTool + '防御';
  }
  var info = '';

  while(true) {
    info += soldier.attack(commonPeople);
    if(commonPeople.hp <= 0) {
      info += 'Stefan fail\n\n';
      break;
    }

    soldier.getHp();
    info += commonPeople.attack(soldier);

    if(soldier.hp <= 0) {
      info += 'Damon fail\n\n';
      break;
    }
  }
  console.log(info);
};

module.exports = Fight;
