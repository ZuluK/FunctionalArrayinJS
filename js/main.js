/*  ------------ Functional Concepts with JavaScript ------------------------- */

What does mysteryOperation do?
-- Takes a array of numbers --
-- create iterator, 'sum' variable & new array --
-- iterate through original array --
      -- push to new array the value of the current index original array mulitipied by itself --
-- iterate through new array --
      -- add values of current index of new array to the sum variable --

function mysteryOperation(nums) {//function that takes parameter of nums
  var i, sum = 0, squares = [];//declares variables that hold values

  for(i = 0; i < nums.length; i++){
    squares.push(nums[i]*nums[i]);
  }

  for (i = 0, i < squares.length; i++){
    sum += squares[i];
  }
  return sum;
}

console.log(
  mysteryOperation( getArrayofIntergers())
);

Abstractly, it:
1. maps from an array of integers to an array of its squares.
2. reduces the array of squares to its sum.
