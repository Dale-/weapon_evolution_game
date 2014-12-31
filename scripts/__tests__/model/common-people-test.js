jest.dontMock('../../model/common-people.js');
jest.dontMock('../../model/player.js');


describe('CommonPeople', function() {

  describe('#attackPoint', function() {

    it('it should be return correct hp', function() {

      var CommonPeople = require('../../model/common-people');
      var commonPeople = new CommonPeople('Damon', 5, 1);
      var result = commonPeople.attackPoint(
                   {name: 'Stefan', hp: 3, attackValue:1});

      expect(result).toBe(2);
    });
  });
});
