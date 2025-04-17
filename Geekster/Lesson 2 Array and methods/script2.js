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
