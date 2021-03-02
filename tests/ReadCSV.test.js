const CSVRead = require('../src/CSV/ReadCSV');
const City = require('../src/Models/City')
const expect = require('expect');
test('Can read CSV file with Papa Parse', async () => {
    let filename  = 'data/worldcities.csv';
    let outData = await CSVRead.getRecords(filename, City);
    expect(outData.length).toBe(6)
    console.log(outData);
});