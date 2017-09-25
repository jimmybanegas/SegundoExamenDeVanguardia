const Reader = require('./reader')
let reader = new Reader();

module.exports = class WeatherReader {
  static get data() {
    const data = reader.readFile('./resources/football.dat').split('\n')
      .slice(1).slice(0, -1)
      .filter(line => !line.startsWith('-'));
    return data.slice(0, 18).concat(data.slice(19));
  }

  static parseData() {
    const data = this.data.map(line => line.replace('-', '').split(/\s+/));
    return data.map(d => ({
      team: d[2],
      goalsFor: Number(d[7]),
      goalsAgainst: Number(d[8]),
    }));
  }

  static getClosestTeam() {
    const parsed = this.parseData();
    return parsed.sort((team1, team2) => Math.abs(team1.goalsFor - team1.goalsAgainst) -
                                         Math.abs(team2.goalsFor - team2.goalsAgainst))[0];
  }
};
