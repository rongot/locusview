const chai = require('chai');
const puppeteer = require('puppeteer')
const assert = chai.assert;
const fs = require('fs')


module.exports = {

    fileToData: (filepath,delimiter = ",")=>{
        //https://nodejs.dev/learn/reading-files-with-nodejs
        let data = []
        try {
            data = fs.readFileSync(filepath, 'utf8')
            // console.log(data, typeof data)
        } catch (err) {
            console.error(err)
        }
        
        const str=data
        //https://sebhastian.com/javascript-csv-to-array/
        // slice from start of text to the first \n index
        // use split to create an array from string by delimiter
        const headers = str.slice(0, str.indexOf("\n")).split(delimiter)

        // slice from \n index + 1 to the end of the text
        // use split to create an array of each csv value row
        const rows = str.slice(str.indexOf("\n") + 1).split("\n")

        // Map the rows
        // split values from each row into an array
        // use headers.reduce to create an object
        // object properties derived from headers:values
        // the object passed as an element of the array
        const arr = rows.map(function (row) {
            const values = row.split(delimiter)
            const el = headers.reduce(function (object, header, index) {
                object[header] = values[index]
                return object
            }, {})
            return el
        })

        // return the array
        return arr;
        
    }

}