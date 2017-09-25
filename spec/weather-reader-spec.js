const weather = require('../src/weather-reader');
require('jasmine-co').install();

describe('WeatherReader class ', () => {
  describe('when parsed data is correct', () => {
    let data;
    beforeEach(() => {
      data = weather.parseData();
    });
    it('matches objects with the expect key/value pairs', () => {
      expect(data[0]).toEqual(jasmine.objectContaining({
        day: 1,
        maximum: 88,
        minimum: 59,
      }));
    });
  });

  describe('finds the day with minimum spread', () => {
    let data;
    beforeEach(() => {
      data = weather.getDesiredDay();
    });
    it('matches objects with the expect key/value pairs', () => {
      expect(data[0]).toEqual(jasmine.objectContaining({
        day: 14,
        maximum: 61,
        minimum: 59,
      }));
    });
  });
});

