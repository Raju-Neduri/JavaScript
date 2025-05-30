function twoSum(nums, target) {
  const map = {}; // to store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // what number we need to reach the target

    if (map.hasOwnProperty(complement)) {
      // if the complement exists in the map, return the indices
      return [map[complement], i];
    }

    // store the current number with its index
    map[nums[i]] = i;
  }
  return nums;
  throw new Error("No valid pair found"); // this line should never be reached
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 66));
