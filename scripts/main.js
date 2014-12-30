var Fight = require('./model/fight');
var Soldier = require('./model/soldier');
var CommonPeople = require('./model/common-people');

(function main() {
  var soldier = new Soldier('Damon', 6, 1, '马鞭草');
  if(soldier.weapon !== '') {
    soldier.getAttackValue();
  }
  var commonPeople = new CommonPeople('Stefan', 6, 1);

  Fight.fight(soldier, commonPeople);
})();
