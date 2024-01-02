// Code your solution here
function findMatching(array, string) {
  const matchingDrivers = array.filter((drivers) => {
    return drivers.toLowerCase() === string.toLowerCase();
  });
  return matchingDrivers;
}

function fuzzyMatch(array, string) {
  let match = array.filter((drivers) => {
    // return drivers.includes(string);
    return drivers[0] === string[0];
  });
  return match;
}

function matchName(array, string) {
  let nameMatch = array.filter((driver) => {
    return driver.name === string;
  });
  return nameMatch;
}
