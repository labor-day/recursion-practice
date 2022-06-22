/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
let flatten = array => {
  if (array.length === 0) {
    return [];
  }

  if (Array.isArray(array[0])) {
    return [...flatten(array[0]), ...flatten(array.slice(1))];
  }

  return [array[0], ...flatten(array.slice(1))]
}



console.log(flatten([[1, 2],[3, [4, 5]],]))

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
