var _ = require('lodash');

(function main() {
  var a = [2, 6, 8];
  a = _.map(a, function(num) { return num * 3; });
  console.log(a);
})();
