jest.dontMock('../../model/fight');
jest.dontMock('../../model/soldier');
jest.dontMock('../../model/common-people');


describe('Fight', function() {

  describe('.fight', function() {

    it('it should be return correct string', function() {

      console.log = jest.genMockFn();

      var Fight = require('../../model/fight');
      var Soldier = require('../../model/soldier');
      var CommonPeople = require('../../model/common-people');

      var soldier = new Soldier('Damon', 20, 1, '马鞭草');
      var commonPeople = new CommonPeople('Stefan', 20, 1);

      Fight.fight(soldier, commonPeople);
      var expectText = 'Stefan fail';

      expect(console.log).toBeCalledWith(expectText);
    });
  });
});
