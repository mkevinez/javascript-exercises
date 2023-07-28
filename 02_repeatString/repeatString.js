const repeatString = function(string, num) {
    let repStr = "";
    if (num < 0) {
        repStr += "ERROR";
    } else {
        for (i=1; i<=num; i++) {
            repStr += string;
        }
    }
    return repStr
};

// Do not edit below this line
module.exports = repeatString;
