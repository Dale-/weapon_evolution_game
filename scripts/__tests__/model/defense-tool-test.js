jest.dontMock('../../model/defense-tool');


describe('DefenseTool', function() {

  describe('.all', function() {

    it('it should be return correct Array', function() {

      var DefenseTool = require('../../model/defense-tool');
      var result = DefenseTool.all();

      expect(result[0].name).toBe('人血');
      expect(result[1].attackValue).toBe(1);
    });
  });
});
