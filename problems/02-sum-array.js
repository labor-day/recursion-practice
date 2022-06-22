/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

// your code here

let sumArray = integers => {

  if (integers.length === 1) {return integers[0]}
  else {

    return (integers[0] + sumArray(integers.slice(1)));

  }



}

//sumArray([0, 1, -3]) ==== -2
  //return 0 + -2
    //return 1 + -3
      //return -3

console.log(sumArray([-1])); //  6
console.log(sumArray([0, 1, -3])); //  -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
