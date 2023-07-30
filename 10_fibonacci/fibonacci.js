const fibonacci = function(index) {
    let fibArray = [1,1];
    if (index < 0) return "OOPS";
    if (index >= 3) {
        for (let i = 2; i <  index; i++) {
            fibArray.push(fibArray[i-1] + fibArray[i-2]);
        }
    }
    return fibArray[index-1];
};

// Do not edit below this line
module.exports = fibonacci;
