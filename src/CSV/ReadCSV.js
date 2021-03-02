const file = require('../FileOperations/File');
const fs = require('fs');
const Papa = require('papaparse/papaparse');
const City = require('../Models/City')

module.exports = class Read {
    static getRecords(filename, Model) {
        return new Promise((resolve, reject) => {

            let absolutePath = file.getAbsolutePath(filename);
            //let inFile = fs.createReadStream(absolutePath);

            let x = 1;
            let list = [];

            let inFile = fs.createReadStream(absolutePath);
            inFile.on("open", function () {
                Papa.parse(inFile, {
                    delimiter: ',',
                    header: true,
                    complete: function ({data}) {

                        data.forEach(function (rec) {
                            list.push(Model.create(rec));
                        })

                        if (typeof list != "undefined") resolve(list);

                    },
                    skipEmptyLines: true,
                });

            }) //end inFile.on function

        }) // end Promise

    } // end getRecords

} // end class
