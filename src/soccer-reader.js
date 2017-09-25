const Reader = require('./reader');

const reader = new Reader();

module.exports = class WeatherReader {
  static get soccerData() {
    const data = reader.readFile('./resources/football.dat')
      .split('\n')
      .slice(1).slice(0, -1)
      .filter(line => !line.startsWith('-'));
    return data.slice(0, 18)
      .concat(data.slice(19));
  }

  static parseData() {
    const data = this.soccerData.map(line => line.replace('-', '').split(/\s+/));
    return data.map(line => ({
      team: line[2],
      goalsFor: Number(line[7]),
      goalsAgainst: Number(line[8]),
    }));
  }

  static getClosestTeam() {
    const parsed = this.parseData();
    return parsed.sort((team1, team2) => Math.abs(team1.goalsFor - team1.goalsAgainst) -
                                         Math.abs(team2.goalsFor - team2.goalsAgainst))[0];
  }
};
