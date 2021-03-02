module.exports = class Read {
    static getRecords(filename, Model) {
        const file = require('../FileOperations/File');
        const fs = require('fs');
        const Papa = require('papaparse/papaparse')

        let absolutePath = file.getAbsolutePath(filename);
        let inFile = fs.createReadStream(absolutePath);

        let list = Array();
        Papa.parse(inFile, {
            delimiter: ',',
            complete: function(results) {
                list.push(results.data);
                results.data.forEach(function (data) {
                    list.push(Model.create(data));
                });
            },
            skipEmptyLines: true,
        });

        //records[0].forEach(function (data) {
            //list.push(Model.create(data));
        //})

        return list;

    }

}