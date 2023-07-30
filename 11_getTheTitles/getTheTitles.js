const getTheTitles = function(booksArray) {

    function getTitle(obj) {
        return obj.title;
    }

    return booksArray.map(getTitle);

};

// Do not edit below this line
module.exports = getTheTitles;
