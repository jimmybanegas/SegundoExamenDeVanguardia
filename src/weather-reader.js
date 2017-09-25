const fs = require('fs');

module.exports = class WeatherReader {
  static loadDataFromFile() {
    return fs.readFileSync('./resources/weather.dat', 'utf8')
      .trim();
  }

  static parseData() {
    if (!this.loadDataFromFile()) {
      throw new Error('Data not found');
    }

    return this.loadDataFromFile().split('\n').slice(2).slice(0, -1)
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

