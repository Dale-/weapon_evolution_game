var _ = require('lodash');
var Skill = require('./skill.js');
var Player = require('./player.js');
var Weapon = require('./weapon.js');


function Soldier(name, hp, attackValue, weapon) {
  Player.call(this, name, hp, attackValue);
  this.weapon = weapon;
  // this.character = character;
  // this.defenseTool = defenseTool;
  // this.defenseValue = 0;
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.attack = function(commonPeople) {

  var value = this.attackValue + weapon.natureValue;

  if(weapon.skill === '毒性' || weapon.skill === '火焰') {

    info = '战士' + this.name + '用' + weapon.name + '攻击了普通人' +
    commonPeople.name + '，' + commonPeople.name + '受到了' +
    value + '点伤害，' + commonPeople.name + weapon.skill.info +
    commonPeople.name + '剩余生命：' + commonPeople.hp + '\n';

    commonPeople.hp -= skill.blood ;

    info += commonPeople.name + '受到' + skill.blood + '点' +
    skill.name + '伤害,' + commonPeople.name +
    '剩余生命：' + commonPeople.hp;

  } else if(weapon.skill === '致命一击') {

  } else {

  }

  return info;
};

Soldier.prototype.attackText = function(commonPeople, weapon, skill, value){

  console.log(weapon);
  console.log(skill);

  var info = '';

  commonPeople.hp -= value;

  if(weapon.skill === '毒性' || weapon.skill === '火焰') {

    info = '战士' + this.name + '用' + weapon.name + '攻击了普通人' +
           commonPeople.name + '，' + commonPeople.name + '受到了' +
           value + '点伤害，' + commonPeople.name + skill.info +
           commonPeople.name + '剩余生命：' + commonPeople.hp + '\n';

    commonPeople.hp -= skill.blood ;

    info += commonPeople.name + '受到' + skill.blood + '点' +
            skill.name + '伤害,' + commonPeople.name +
            '剩余生命：' + commonPeople.hp;

  } else if(weapon.skill === '致命一击') {

  } else {

  }
  return info;
};


// Soldier.prototype.getHp = function() {
//   console.log(this.defenseTool);
//   var myDefenseTool = _.find(DefenseTool.all(),{ 'name': this.defenseTool});
//   this.hp += myDefenseTool.attackValue;
//   this.defenseValue = myDefenseTool.attackValue;
// };

module.exports = Soldier;
