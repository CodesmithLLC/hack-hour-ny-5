/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, targetNum) {
  for (let i = 0; i < arr.length; i++) {
    let remainder = targetNum - arr[i];
    let compareArr = arr.slice();
    compareArr.splice(i, 1);
    if (compareArr.includes(remainder)) {
      return true;
    }
  }
  return false;
}

console.log(twoSum([1, 2, 3, 4, 5], 10));

module.exports = twoSum;
