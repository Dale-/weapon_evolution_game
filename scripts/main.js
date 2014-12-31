var Fight = require('./model/fight.js');
var Soldier = require('./model/soldier.js');
var CommonPeople = require('./model/common-people.js');

(function main() {
  var soldier = new Soldier('Damon', 20, 5, '马鞭草', '人血');
  if(soldier.weapon !== '') {
    soldier.getAttackValue();
  }
  var commonPeople = new CommonPeople('Stefan', 20, 5);

  Fight.fight(soldier, commonPeople);
})();
