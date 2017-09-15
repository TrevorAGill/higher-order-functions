//Higher Order List Transformation functions

var array1 = [1,2,3,4,5,6,7,8,9];

//Map
var doubled = array1.map(function(number) {
  return number * 2;
});

var doubledArrow = array1.map((number) => number*2);

//Filter
var evensOnly = array1.filter(function(number) {
  return number%2 === 0;
});

var evensOnlyArrow = array1.filter((number) => number%2 ===0);

//Reduce -- reduce takes 2 arguments,
var sumOfArray = array1.reduce(function(sum, number) {
  return sum + number;
}, 0);

var sumOfArrayArrow = array1.reduce((sum,number) => sum + number);



//problem: write a function that takes a given string and character and returns the number of times the character appears in the string
let charCountInString = function(word,letter) {
  return word.split("").filter((char) => char === letter).length;
}

charCountInString("mississippi","s");


array1
doubled
doubledArrow
evensOnly
evensOnlyArrow
sumOfArray
sumOfArrayArrow
