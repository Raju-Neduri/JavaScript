//inbuilt array methods

//toString method
// The toString() method converts an array to a string of comma-separated values.
let array1 = [1, "Raj", null, undefined, true, 12.5];
console.log(typeof array1.toString()); // Check the type of the string

//split method
// The split() method splits a string into an array of substrings based on a specified separator.
let str = "Neduri Raju";
let array2 = str.split("");
console.log(array2); // Check the array after splitting

//join method
// The join() method joins all elements of an array into a string, separated by a specified separator.
array2.join("");
console.log(array2.join("")); // Check the string after joining

//push method
let arr3 = [1, 2, 3, 4, 5];
arr3.push(3);
console.log(arr3);

//pop method
let arr4 = [1, 2, 3, 4, 5];
console.log(arr4.pop());
console.log(arr4);

//shift method
console.log("Shift method");
let arr5 = [1, 2, 3, 4, 5];
console.log(arr5.shift());
console.log(arr5);

//unshift method
let arr6 = [1, 2, 3, 4, 5];
console.log(arr6.unshift(6));
console.log(arr6);

//delete method

let arr7 = [1, 2, 3, 4, 5];
console.log(delete arr7[2]);
console.log(arr7);

//concat
let arr8 = [1, 2, 3, 4, 5];
let arr9 = [6, 7, 8, 9, 10];
result = arr8.concat(arr9);
console.log(result);

//sort
let arr10 = [1, 56, 2829, 944, 578];
arr10.sort();
console.log(arr10);

//Reverse
let arr11 = [1, 2, 3, 4, 5, 6];
arr11.reverse();
console.log(arr11);

//splice
let arr12 = [1, 2, 3, 4, 5, 6];
arr12.splice(2, 1, 50, 60);
console.log(arr12);

//slice
let arr13 = [1, 2, 3, 4, 5, 6];
let sliceResult = arr13.slice(2, 5);
console.log(sliceResult);

//Some
let arr14 = [1, 2, 3, 5, 7, 8];
arr14.some((item) => {
  return item % 2 === 0;
});
console.log(arr14);
