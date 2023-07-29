const sumAll = function(firstNum, lastNum) {
    let sum = 0;
    let numPair = [firstNum, lastNum];
    numPair.sort()

    let filterNumPair = numPair.filter(num => Number.isInteger(num) && num > 0)

    if (filterNumPair.length < 2) {
        return "ERROR"
    } else {
        for (i=numPair[0]; i<=numPair[1]; i++) {
            sum += i;
        }
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
