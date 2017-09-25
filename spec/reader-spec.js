const Reader = require('../src/reader');
require('jasmine-co').install();

const reader = new Reader();
describe('reader', () => {
  describe('when reading valid filename', () => {
    let data = null;
    beforeEach(() => {
      data = reader.readFile('./resources/football.dat');
    });
    it('then the data is not null', () => {
      expect(data).toBeDefined();
    });
  });
  describe('when reading invalid filename', () => {
    let data = null;
    beforeEach(() => {
      data = reader.readFile('./resources/footbll.dat');
    });
    it('then the data is null', () => {
      expect(data).toBeNull();
    });
  });
});
