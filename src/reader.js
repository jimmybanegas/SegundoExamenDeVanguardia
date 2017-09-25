const FS = require('fs');

module.exports = class Reader {
  readFile(filename) {
    try {
      return FS.readFileSync(filename, 'utf8').trim();
    } catch (error) {
      console.error(error);
    }
    return null;
  }
};
