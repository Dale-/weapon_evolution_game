jest.dontMock('../../model/random.js');
jest.dontMock('../../model/weapon.js');
jest.dontMock('../../model/skill.js');


describe('Random', function() {

  describe('#attackPoint', function() {

    it('it should be return correct hp', function() {

      var Weapon = require('../../model/weapon.js');
      var Skill = require('../../model/skill.js');
      var Random = require('../../model/random.js');

      Math.random = jest.genMockFn();

      Math.random.mockReturnValue(0.3);

      var weapon = new Weapon('寒冰剑', 4, [Skill.all()[2],
                              Skill.all()[4], Skill.all()[0]]);

      var result = Random.skillName(weapon);

      expect(result).toBe('致命一击');
    });
  });
});
