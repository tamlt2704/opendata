'use strict'; 

const path = require('path');
const fs = require('fs');
const dir = require('node-dir');
const cheerio = require('cheerio');
const converter = require('json-2-csv');

const vcbExchangeRateUrl = 'https://portal.vietcombank.com.vn/Usercontrols/TVPortal.TyGia/pXML.aspx';
const data_folder = './data';
const raw_data_folder = path.join(data_folder, 'raw_data');
const process_data_folder = path.join(data_folder, 'process_data');


//create folder if not exist
[data_folder, raw_data_folder, process_data_folder].forEach((fPath) => {
    if (fs.existsSync(fPath)) {
        console.log(`${fPath} exists`);
    } else {
       console.log(`${fPath} does not exists. creating...`);
       fs.mkdirSync(fPath);
    }
});

var json2csvCallback = function(err, data) {
    if (err) throw err;
    fs.writeFile('out.csv', csv, 'utf8', function(err) {
        if (err) {
            console.log('something wrong');
        } else {
            console.log('file saved');
        }
    })
}

var vcb_dataPath = path.join(raw_data_folder, 'vcb/20200419.xml');
const data = fs.readFileSync(vcb_dataPath, {encoding: 'utf-8', flag: 'r'});
var $ = cheerio.load(data,
    {
        xmlMode: true,
    }
);
var rs = $('Exrate')
    //.filter((i, e) => (e.type === 'tag'))
    .map((i,e) => e.attribs)
    .get();
converter.json2csv(rs.rows, json2csvCallback);

exports.fetchVcbData = function() {
    var vcb_dataPath = path.join(raw_data_folder, 'vcb');
    console.log('fetching data....' + vcb_dataPath);
    dir.readFiles(
        vcb_dataPath,           // file paths
        {                       //options
            match: /.xml$/,
            recursive: false,   // not sub folder
        },
        (err, content, next) => {
            console.log('here');
            if (err) {
                consoe.log(err);
            } else {
                console.log(fileName);
                console.log(content);
            }
            next();
        }
    );
    console.log('done');
};
