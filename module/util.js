
const fs = require('fs');
const _ = require('lodash');

const findValue = (x, y, data) => {
    let value = ' ';
    _.each(data, (d) => {
        if (x === parseFloat(d[0]) && y === parseFloat(d[1])) {
            value = String.fromCharCode(d[2]);
        }
    });
    return value;
};

const execute = () => {
    fs.readFile('data/data1.txt', 'utf8', (err, data) => {
        if(err) {
            console.log(err);
        } else {
            const finalData = [];

            const formattedData = data.split('\n');
            _.each(formattedData, (item) => {
                const itemVal = item.substr(1, item.length - 2);
                finalData.push(itemVal.split(','));
            });
            let finalArray = Array(100).fill().map(a => Array(100));
            let buffer = '';
            for (let i = 0; i < finalArray.length; i++) {
                for (let j = 0; j < 100; j++) {
                    finalArray[i][j] = findValue(i, j, finalData);
                    buffer += finalArray[i][j];
                }
                buffer += '\n';
            }
            console.log(buffer);
        }
    });
};


module.exports = {
    draw: execute,
};
