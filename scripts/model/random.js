function Random() {
}

Random.weapon = function() {
  var number = Math.random();

  if(number <= 0.2) {
    return 0;

  } else if (number <= 0.4) {
    return 1;

  } else if (number <= 0.6) {
    return 2;

  } else if (number <= 0.8) {
    return 3;

  } else {
    return 4;
  }
};

Random.skillName = function(weapon) {
  
  var size = weapon.skills.length + 1;
  var region = 1 / size;
  var random = Math.random();
  var index = 0;

  for(var i = 1; i <= size; i++) {
    if(random < i * region && random > (i - 1)* region) {
      index = i - 1;
    }
  }

  if(index === weapon.skills.length) {
    return '';
  } else {
    return weapon.skills[index].name;
  }
};

module.exports = Random;
