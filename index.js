const Reader = require('./src/weather-reader');
const Reader2 = require('./src/soccer-reader');
// const FILENAME = 'weather.dat';


// weather.readFile(FILENAME);

console.log(Reader.getDesiredDay());
console.log(Reader2.getClosestTeam());
