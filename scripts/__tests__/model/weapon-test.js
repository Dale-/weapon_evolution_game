jest.dontMock('../../model/weapon');


describe('Weapon', function() {

  describe('.all', function() {

    it('it should be return correct Array', function() {

      var Weapon = require('../../model/weapon');
      var result = Weapon.all();

      expect(result[0].name).toBe('马鞭草');
      expect(result[1].attackValue).toBe(3);
    });
  });
});
