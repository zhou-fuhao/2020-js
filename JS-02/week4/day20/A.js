function sum(...data) {
    return eval(data.join('+'));
}

module.exports = {
    sum
};