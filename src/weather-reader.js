const Reader = require('./reader');

const reader = new Reader();

module.exports = class WeatherReader {
  static parseData() {
    const data = reader.readFile('./resources/football.dat');
    return data
      .split('\n')
      .slice(2).slice(0, -1)
      .map(line => line.trim().split(/\s+/))
      .map(line => ({
        day: Number(line[0]),
        maximum: parseInt(line[1]),
        minimum: parseInt(line[2]),
      }));
  }

  static getDesiredDay() {
    const parsed = this.parseData();
    return parsed.sort((day1, day2) => (day1.maximum - day1.minimum) -
                                       (day2.maximum - day2.minimum))[0];
  }
};
