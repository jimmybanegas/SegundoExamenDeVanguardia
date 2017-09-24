const Reader = require('./src/WeatherReader');
const Reader2 = require('./src/SoccerReader');
// const FILENAME = 'weather.dat';


// weather.readFile(FILENAME);

console.log(Reader.desiredDay());
console.log(Reader2.closestTeam());
