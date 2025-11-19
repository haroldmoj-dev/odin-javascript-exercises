const findTheOldest = function(people) {
    let oldestAge = 0;
    return people.reduce((oldest, person) => {
        // get the person's age
        let age = 0;
        let currentYear = new Date().getFullYear();
        if (person.yearOfDeath) age = person.yearOfDeath - person.yearOfBirth;
        else age = currentYear - person.yearOfBirth;

        // check if older than recorded oldest
        if(age > oldestAge) {
            oldestAge = age;
            return person;
        }
        
        return oldest;
    }, {});


};

// Do not edit below this line
module.exports = findTheOldest;
