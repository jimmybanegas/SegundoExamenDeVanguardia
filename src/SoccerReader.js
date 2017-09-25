const fs = require('fs');

module.exports = class WeatherReader {
  // constructor() {}

  static loadData() {
    return fs.readFileSync('./resources/football.dat', 'utf8')
      .trim();
  }

  //   readFile(filename) {
  //     this.filename = filename;
  //     this._data = fs_1.readFileSync(filename, 'utf8');
  //   }
  static get data() {
    // if (!this.filename) {
    //   throw new Error('Data file not specified');
    // }
    const midata = this.loadData();

    const data = midata.split('\n')
      .slice(1).slice(0, -1).filter(line => !line.startsWith('-'));
    return data.slice(0, 18).concat(data.slice(19));
  }
  static parseData() {
    const data = this.data.map(line => line.replace('-', '').split(/\s+/));
    return data.map(d => ({
      team: d[2],
      f: Number(d[7]),
      a: Number(d[8]),
    }));
  }
  static closestTeam() {
    const parsed = this.parseData();
    return parsed.sort((t1, t2) => Math.abs(t1.f - t1.a) - Math.abs(t2.f - t2.a))[0];
  }
};
