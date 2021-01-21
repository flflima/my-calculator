exports.sum = (...numbers) => {
    if (numbers.length == 0) {
        return 0;
    }
    return numbers.reduce((acc, currentValue) => acc + currentValue);
};

exports.subtract = (...numbers) => {
    if (numbers.length == 0) {
        return 0;
    }
    return numbers.reduce((acc, currentValue) => acc - currentValue);
};

exports.multiply = (...numbers) => {
    if (numbers.length == 0) {
        return 0;
    }
    return numbers.reduce((acc, currentValue) => acc * currentValue);
};

exports.divide = (dividend, divider) => {
    return 0;
 };