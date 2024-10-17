// 1
function getGreetings(name) {
  alert('Hi, ' + name + ' What`s up?');
}
//getGreetings('kuba klin');

// 2
function isThisMyName(personName) {
  if (personName === 'Kuba') {
    return true;
  }
  return false;
}
console.log(isThisMyName('Kuba'));

// 3
function isThisBoolean(testValue) {
  if (typeof testValue == 'boolean') return true;
  return false;
}
console.log(isThisBoolean(false))

// 4
function getCircleArea(radius) {
  return 2 * Math.PI * radius;
}
console.log(getCircleArea(10));

// 5
function getCirclesAreaSum(radiusOne, radiusTwo) {
  return getCircleArea(radiusOne) +  getCircleArea(radiusTwo);
}
console.log(getCirclesAreaSum(5, 10))

// 6
const getQuarterOfYear = (month) => {
  if (month <= 3) {
    return 1;
  } if (month <= 6) {
    return 2;
  } if (month <= 9) {
    return 3;
  }
  return 4;
}
console.log (getQuarterOfYear(4));