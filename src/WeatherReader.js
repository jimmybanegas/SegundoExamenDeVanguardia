const fs = require('fs');

module.exports = class WeatherReader {
  // constructor() {}

  static loadData() {
    return fs.readFileSync('./weather.dat', 'utf8')
      .trim();
  }

  static parseData() {
    if (!this.loadData()) {
      throw new Error('Data not found');
    }

    return this.loadData().split('\n').slice(2).slice(0, -1)
      .map(line => line.trim().split(/\s+/))
      .map(line => ({
        day: Number(line[0]),
        mxt: parseInt(line[1]),
        mnt: parseInt(line[2]),
      }));
  }

  static desiredDay() {
    return this.parseData()
      .sort((d1, d2) => (d1.mxt - d1.mnt) - (d2.mxt - d2.mnt))[0];
  }
};

