const soccerReader = require('../src/soccer-reader');
require('jasmine-co').install();

describe('SoccerReader class ', () => {
  describe('when parsed data is correct', () => {
    let data;
    beforeEach(() => {
      data = soccerReader.parseData();
    });
    it('matches objects with the expect key/value pairs', () => {
      expect(data[0]).toEqual({
        team: 'Arsenal',
        goalsFor: 79,
        goalsAgainst: 36,
      });
    });
  });

  describe('finds the closest team', () => {
    let data;
    beforeEach(() => {
      data = soccerReader.getClosestTeam();
    });
    it('matches objects with the expect key/value pairs', () => {
      expect(data).toEqual({
        team: 'Aston_Villa',
        goalsFor: 46,
        goalsAgainst: 47,
      });
    });
  });
});
