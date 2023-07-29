const removeFromArray = function(array, ...args) {
    for (let arg of args) {
        let i = array.indexOf(arg);
        while (i !== -1) {
            array.splice(i,1);
            i = array.indexOf(arg);
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
