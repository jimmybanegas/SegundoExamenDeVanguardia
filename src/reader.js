const FS = require('fs');

module.exports = class Reader {
  readFile(filename) {
    return FS.readFileSync(filename, 'utf8').trim();
  }
};