const CSVRead = require('../src/CSV/ReadCSV');
const City = require('../src/Models/City')
const expect = require('expect');
test('Papaparse', async () => {
    let filename  = 'data/worldcities.csv';
    let outData = await CSVRead.getRecords(filename, City);
    expect(outData.length).toBe(6)
});