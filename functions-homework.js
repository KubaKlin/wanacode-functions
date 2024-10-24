// 1
function getGreeting(name, surname) {
  return 'Hi, ' + name + ' ' + surname + ' What`s up?';
}
console.log(getGreeting('kuba', 'klin'));

//
function isThisMyName(personName) {
  return personName === 'Kuba';
}
console.log(isThisMyName('Kuba'));

// 3
function isThisBoolean(testValue) {
  return typeof testValue == 'boolean';
}
console.log(isThisBoolean(false));

// 4
function getCircleArea(radius) {
  return 2 * Math.PI * radius;
}
console.log(getCircleArea(10));

// 5
function getCirclesAreaSum(radiusOne, radiusTwo) {
  return getCircleArea(radiusOne) +  getCircleArea(radiusTwo);
}
console.log(getCirclesAreaSum(5, 10));

// 6
function getQuarterOfYear(month) {
  if (month <= 3) {
    return 1;
  }
  if (month <= 6) {
    return 2;
  }
  if (month <= 9) {
    return 3;
  }
  return 4;
}
console.log (getQuarterOfYear(4));