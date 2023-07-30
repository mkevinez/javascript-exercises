const findTheOldest = function(peopleArray) {
    
    oldestArray = peopleArray.reduce(returnOldest);

    function returnOldest(older, person) {
        if (getAge(older) > getAge(person)) {
            return older;
        } else {
            return person;
        }
    }

    function getAge(personObj) {
        let today = new Date();
        if (personObj.yearOfDeath === undefined) {
            return today.getFullYear() - personObj.yearOfBirth;
        } else {
            return personObj.yearOfDeath - personObj.yearOfBirth;
        }
    }
    
    return oldestArray;    
};

// Do not edit below this line
module.exports = findTheOldest;
