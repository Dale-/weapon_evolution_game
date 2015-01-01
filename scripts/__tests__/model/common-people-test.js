jest.dontMock('../../model/common-people.js');
jest.dontMock('../../model/player.js');


describe('CommonPeople', function() {

  describe('#attack', function() {

    it('it should be return correct hp', function() {

      var CommonPeople = require('../../model/common-people');
      var commonPeople = new CommonPeople('Damon', 5, 1);
      var result = commonPeople.attack(
      {name: 'Stefan', hp: 3, attackPoint:1});

      expect(result).toBe('//Damon进攻');
    });
  });
});
