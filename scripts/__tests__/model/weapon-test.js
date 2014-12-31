// jest.dontMock('../../model/weapon.js');
//
//
// describe('Weapon', function() {
//
//   describe('.all', function() {
//
//     it('it should be return correct Array', function() {
//
//       var Weapon = require('../../model/weapon');
//       var result = Weapon.all();
//
//       expect(result[0].name).toBe('利剑');
//     });
//   });
// 
//   describe('#getAttackValue', function() {
//
//     it('it should be return correct attackValue', function() {
//
//       var Weapon = require('../../model/weapon');
//       var weapon = new Weapon('利剑', 1, ['致命一击'], 1);
//       var result = weapon.getAttackValue();
//
//       expect(result).toBe(6);
//     });
//   });
//
// });
