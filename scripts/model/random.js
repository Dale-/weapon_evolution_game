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
