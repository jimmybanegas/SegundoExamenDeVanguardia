const Reader = require('./reader');

const reader = new Reader();

module.exports = class WeatherReader {
  static get soccerData() {
    const data = reader.readFile('./resources/football.dat')
      .split('\n')
      .slice(1);
    return data.slice(0, 17)
      .concat(data.slice(18));
  }

  static parseSoccerData() {
    const data = this.soccerData.map(line => line.replace('-', '').split(/\s+/));
    return data.map(line => ({
      team: line[2],
      goalsFor: parseInt(line[7]),
      goalsAgainst: parseInt(line[8]),
    }));
  }

  static get teamWithSmallestDifference() {
    const parsed = this.parseSoccerData();
    return parsed.sort((team1, team2) => Math.abs(team1.goalsFor - team1.goalsAgainst) -
                                         Math.abs(team2.goalsFor - team2.goalsAgainst))[0];
  }
};
