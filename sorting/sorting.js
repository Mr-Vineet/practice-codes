const arr = [100, 23, 50, 90, 67];
//ascending order
arr.sort(function (a, b) {
  return a - b;
});

//descending order
arr.sort(function (a, b) {
  return b - a;
});

//randomly shuffle numbers
arr.sort(function (a, b) {
  return Math.random() - 0.5;
});

//mixed ascending order
const nums = [-1, 2, -56, 7, -5, 3, -23, -6, -5, 43];
nums.sort(function (a, b) {
  return Math.abs(a) - Math.abs(b);
});

// arrange in an order of even numbers first and then odd numbers that too sorted in themselves.

const numbers = [1, 2, 6, 3, 4, 9, 0, 8, 7, 5];

numbers.sort(function (a, b) {
  return a - b;
});

const selectNums = function (numbers) {
  return function (res) {
    return numbers.filter(function (number) {
      return (number & 1) === res;
    });
  };
};

const sortedNum = selectNums(numbers);
const evenSorted = sortedNum(0);
const oddSorted = sortedNum(1);

// console.log(evenSorted.concat(oddSorted));

// alphabetical order {0 to 9, "", a to b}

arr.sort();
const arr1 = [1, 2, 4, 29, 100, 30, "abc", "dev"];
arr.sort();

arr.sort(function (a, b) {
  if (a > b) {
    return -1;
  }
  if (a === b) {
    return 0;
  }
  return 1;
});

//sorting is based on UTF - 16(unicode transformation format) value in ascending order
const arr2 = [1, 2, 4, "", 29, 0, 100, " ", 30, "abc", "dev"];
arr1.sort();
// [
//   "",    " ",   0,
//   1,     100,   2,
//   29,    30,    4,
//   "abc", "dev"
// ]

//reverse the array
arr.sort(function (a, b) {
  return -1;
});

const arr3 = ["atul", "vineet", "joy", "happy", "dukh", "keeda"];

arr3.sort().sort(function () {
  return -1;
});
// [ "vineet", "keeda", "joy", "happy", "dukh", "atul"]

//sort a string in alphabetical order
"apple".split("").sort().join("");

//sort a string in reverse alphabetical order
[..."apple"].sort().sort(() => -1).join("");

//given an array of strings arrange them in alphabetical order without considering capitalisation eg. -> ["animal", "apple", "Apple", "banana", "Banana"]

const fruits = ["apple", "mango", "banana", "leechi", "kiwi", "Apple", "Kiwi", "LEechi", "Mango", "Banana"];

//sort the array of strings to keep vowels first and then consonants both arranged in alphabetical order

const arrayOfStrings = ['ugli', 'apple', 'mango', 'elephant', "banana", 'ichy', 'leechi', 'guava', 'orange', 'dragonfruit'];

const orderedArray = arrayOfStrings.sort(function (a, b) {
  const vowels = "aeiou";

  if (vowels.includes(a.at(0)) && !vowels.includes(b.at(0))) {
    return -1;
  }

  if (!vowels.includes(a.at(0)) && vowels.includes(b.at(0))) {
    return 1;
  }

  return a.charCodeAt(0) - b.charCodeAt(0);
});

console.log(orderedArray);

//gives shuffled names
arr3.sort(function () {
  return Math.random() - 0.5;
});

//sorting array inside an array
function sort(array) {
  return array.toSorted(function (a, b) {
    return b - a; //descending order
  });
}

const array = [[1, 11, 0, 78], [2, 9, 3], [5, 5, 9]];
array.map(sort);