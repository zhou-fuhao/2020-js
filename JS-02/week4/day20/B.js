let A = require('./A');

function avg(...data) {
    data.sort((m, n) => m - n);
    data = data.slice(1, data.length-1);
    
    return A.sum(...data) / data.length;
}

module.exports = {
    avg
};