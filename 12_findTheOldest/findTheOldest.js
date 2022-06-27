const findTheOldest = function(people) {
    let oldest;
    let oldest_age = 0;
    for (let i = 0; i < people.length; i++) {
        let person_age;
        if ("yearOfDeath" in people[i] === false) {
            let currentYear = new Date().getFullYear();
            person_age = currentYear - people[i].yearOfBirth;
        }
        else {
            person_age = people[i].yearOfDeath - people[i].yearOfBirth;
            console.log(person_age);
        }

        if(person_age > oldest_age){
            oldest_age = person_age;
            oldest = people[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
