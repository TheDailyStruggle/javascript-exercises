const findTheOldest = function (people) {
    if (people.yearOfDeath !== Number) {
        yearOfDeath = (new Date()).getFullYear();
    };

    const oldest = people.sort((firstP, secondP) => {
        if (firstP.yearOfDeath < secondP.yearOfDeath) {
            return -1;
        }
        if (firstP.yearOfDeath > secondP.yearOfDeath) {
            return 1;
        }
        if (firstP.yearOfDeath = secondP.yearOfDeath) {
            return 0;
        }
    }
    )

    return oldest[0].name

};

// Do not edit below this line
module.exports = findTheOldest;
