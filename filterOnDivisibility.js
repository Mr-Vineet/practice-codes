// Write a filter function to return an array that contains only the numbers that are divisible by 3, divisible by 5, and greater than 20.

const numbers = [2, 5, 45, 12, 75, 17, 24, 33, 50, 67, 72, 85];

const isGreaterThan20 = function (num) {
  return num > 20;
};

const isDivisible = function (divisor) {
  return function (number) {
    return number % divisor === 0;
  };
};

const isDivisibleBy15 = isDivisible(15);
const filteredArray = numbers.filter(isDivisibleBy15).filter(isGreaterThan20);
// const filteredArray = numbers.filter(isDivisibleBy15 && isGreaterThan20);

console.log(filteredArray);