const findTheOldest = function(people) {
    const newPeople = people.map((people) => {
        let yearsLived;
        if ("yearOfDeath" in people) {
            yearsLived = people.yearOfDeath - people.yearOfBirth;
        } else {
            yearsLived = (new Date().getFullYear()) - people.yearOfBirth;
        }
        return {name: people.name, lifespan: yearsLived}
    });

    return newPeople.sort((a, b) => b.lifespan - a.lifespan)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
