const findTheOldest = function (array) {
  return array.reduce((a, b) => {
    const currentYear = new Date().getFullYear();
    const aAge = a.yearOfDeath
      ? a.yearOfDeath - a.yearOfBirth
      : currentYear - a.yearOfBirth;
    const bAge = b.yearOfDeath
      ? b.yearOfDeath - b.yearOfBirth
      : currentYear - b.yearOfBirth;
    return aAge > bAge ? a : b;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
