// Description:
// Write a function which calculates the average of the numbers in a given array.

//   Note: Empty arrays should return 0.;

// Solution: 

function findAverage(array) {
  if (array.length===0) return 0;
  let sum=array.reduce((acc, item) => {
    acc+=item;
    return acc;
  }, 0);
  return sum/array.length;
}
