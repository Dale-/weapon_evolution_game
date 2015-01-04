jest.dontMock('../../model/weapon.js');
jest.dontMock('../../model/skill.js');


describe('Weapon', function() {

  describe('.all', function() {

    it('it should be return correct Array', function() {

      var Weapon = require('../../model/weapon');
      var Skill = require('../../model/skill');
      var result = Weapon.all();

      expect(result[0].name).toBe('晕锤');
      expect(result[0].skills[0].name).toBe('击晕');
    });
  });

});
