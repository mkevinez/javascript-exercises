const palindromes = function (word) {
    word = word.toUpperCase().replace(/[^A-Z0-9]/g,"");
    let reverseWord = word.split("").reverse().join("");
    if (word === reverseWord) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
