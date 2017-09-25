const soccer = require('../src/soccer-reader');
require('jasmine-co').install();

describe('SoccerReader class ', () => {
  describe('when parsed data is correct', () => {
    let data;
    beforeEach(() => {
      data = soccer.parseData();
    });
    it('matches objects with the expect key/value pairs', () => {
      expect(data[0]).toEqual(jasmine.objectContaining({
        team: 'Arsenal',
        goalsFor: 79,
        goalsAgainst: 36,
      }));
    });
  });

  describe('finds the closest', () => {
    let data;
    beforeEach(() => {
      data = soccer.getClosestTeam;
    });
    it('matches objects with the expect key/value pairs', () => {
      expect(data[0]).toEqual(jasmine.objectContaining({
        team: 'Aston_Villa',
        goalsFor: 46,
        goalsAgainst: 47,
      }));
    });
  });
});
